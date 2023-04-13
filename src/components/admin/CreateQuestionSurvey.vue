<template>
    <div class="CreateQuestionContent">

        <div class="SaveContent mb-5 ">
            <div class=" content-header ContentListSurvey">
                <div class="row ">
                    <div class="col-6 text-left">
                        <h2>
                            Tạo Khảo Sát
                        </h2>
                    </div>
                    <div class="col-6 text-end">
                        <button type="submit" class="btn btn-success " @click="createFormSurvey">Lưu chính thức</button>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
            </div>
        </div>

        <div class="container bg ">
            <div class="title">
                <div class="mb-3">
                    <label for="" class="form-label">Tên khảo sát</label>
                    <input class="form-control" v-model="CreateSurveyDto.nameSurveyCreateSurvey"
                        placeholder="Tên khảo sát ..." />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Nội dung :</label>
                    <textarea class="form-control" placeholder=" Mô tả khảo sát ..."
                        v-model="CreateSurveyDto.contentSurveyCreateSurvey" rows="1"></textarea>
                </div>
            </div>




            <div class="content mt-5" v-for="(question, Qindex) in CreateSurveyDto.questions" :key="Qindex">
                <div class="row">
                    <div class="col-4">
                        <label for="" class="form-label">Câu hỏi: </label>
                        <input type="text" name="" v-model="CreateSurveyDto.questions[Qindex].nameQuestionCreateSurvey"
                            id="" class="form-control " placeholder="Viết câu hỏi của bạn ..." aria-describedby="helpId">
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="" class="form-label">Chọn kiểu câu hỏi :</label>
                                <select class="form-select form-select-lg"
                                    v-model="CreateSurveyDto.questions[Qindex].questionTypeIdCreateSurvey">
                                    <option value="">QuestionType</option>
                                    <option v-for="type in types" :key="type.id" :value="type.id">{{
                                        type.nameType }}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>




                <div class="form-check" v-for="(option, index) in CreateSurveyDto.questions[Qindex].options" :key="index">
                    <input class="form-check-input" type="checkbox" :value="option" :id="'option' + index"
                        v-model="selectedOptions">
                    <label class="form-check-label" :for="'option' + index">
                        <div class="col">
                            <div class="mb-3">
                                <input type="text" name="" id="" class="form-control"
                                    :placeholder="CreateSurveyDto.questions[Qindex].options[index]"
                                    aria-describedby="helpId">
                            </div>
                        </div>
                    </label>
                </div>
                <button class="btn btn-sm btn-primary mt-2" @click="addOption(Qindex)">Thêm tùy chọn</button>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-5">
                <button class="btn btn-success me-2" @click="addQuestion">Thêm câu hỏi</button>
            </div>

        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'CreateQuestionText',
    data() {
        return {
            currentQuestion: true, // Ban đầu đang tạo câu hỏi đầu tiên
            types: [],
            CreateSurveyDto: {
                nameSurveyCreateSurvey: '',
                contentSurveyCreateSurvey: '',
                nameOptionCreateSurvey: '',
                questions: [
                    {
                        nameQuestionCreateSurvey: '',
                        questionTypeIdCreateSurvey: '',
                        options: ['Tùy chọn 1'],
                    },
                ],
            },
            selectedOptions: [],
        }
    },
    mounted() {
        axios.get('http://localhost:8081/question-type/types', {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        }
        ).then(response => {
            this.types = response.data;
            console.log(this.types);
        }).catch(error => {
            console.log(error);
        });
    },
    methods: {
        createFormSurvey() {
            const newCreateSurveyDto = {
                nameSurveyCreateSurvey: this.CreateSurveyDto.nameSurveyCreateSurvey,
                contentSurveyCreateSurvey: this.CreateSurveyDto.contentSurveyCreateSurvey,
                nameQuestionCreateSurvey: this.CreateSurveyDto.questions[this.CreateSurveyDto.questions.length - 1].nameQuestionCreateSurvey || '',
                questionTypeIdCreateSurvey: this.CreateSurveyDto.questions[this.CreateSurveyDto.questions.length - 1].questionTypeIdCreateSurvey,
                nameOptionCreateSurvey: this.CreateSurveyDto.nameOptionCreateSurvey,
                options: this.CreateSurveyDto.questions[this.CreateSurveyDto.questions.length - 1].options,
                selectedOptions: this.CreateSurveyDto.selectedOptions,

            };

            axios.post('http://localhost:8081/createSurvey', newCreateSurveyDto, {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            })
                .then(() => {
                    // this.CreateSurveyDto.nameSurveyCreateSurvey = '',
                    //     this.CreateSurveyDto.contentSurveyCreateSurvey = '',
                    //     this.CreateSurveyDto.questions[this.CreateSurveyDto.questions.length + 1].nameQuestionCreateSurvey  =  '',
                    //     this.CreateSurveyDto.questions[this.CreateSurveyDto.questions.length + 1].questionTypeIdCreateSurvey =  '',
                    //     this.CreateSurveyDto.nameOptionCreateSurvey= ' ',
                    //     this.CreateSurveyDto.questions[this.CreateSurveyDto.questions.length + 1].options= '',
                    //     this.CreateSurveyDto.selectedOptions= this.CreateSurveyDto.selectedOptions.clear()

                    // this.CreateSurveyDto.selectedOptions.clear();
                    // this.$router.push('create-survey')
                    console.log(this.selectedOptions);
                    this.$router.push({ name: 'surveys-admin' });
                    
                })
                .catch((error) => {
                    alert('Failed to add questionSurvey: ' + error.response.data.message);
                });
        },
        addOption(index) {
            this.CreateSurveyDto.questions[index].options.push('Tùy chọn ' + (this.CreateSurveyDto.questions[index].options.length + 1));
        },

        addQuestion() {
            this.CreateSurveyDto.questions.push({
                nameQuestionCreateSurvey: '',
                questionTypeIdCreateSurvey: '',
                options: ['Tùy chọn 1'],

            });
        },

        removeOption(Qindex, option) {
            const index = this.CreateSurveyDto.questions[Qindex].options.indexOf(option);
            // const index = this.options.indexOf(option);
            if (index !== -1) {
                this.CreateSurveyDto.questions[Qindex].options.splice(index, 1);
            }
        }
    },

    watch: {
        selectedOptions: function (Qindex, newVal, oldVal) {
            for (const option of oldVal) {
                if (!newVal.includes(option)) {
                    this.removeOption(Qindex, option);
                }
            }
        }
    }
}
</script>

<style>
.bg {
    background-color: #EEF0DA;
    padding: 30px;
    border-radius: 30px;

}

.CreateQuestionContent .title,
.CreateQuestionContent .content {
    background-color: #E3E9F3;
    padding: 30px;
    border-radius: 30px;
}

.CreateQuestionContent .content {
    border-bottom: 1px dashed black;
}

.text-bg {
    background-color: #D9D9D9;
}
</style>
`