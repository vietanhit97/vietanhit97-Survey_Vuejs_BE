<template>
    <div class="CreateQuestionContent">
        <div class="container bg ">
            <form action="">
                <div class="title">
                    <h3 class="t1">
                        Tiêu đề khảo sát 1
                    </h3>
                    <div class="mb-3">
                        <label for="" class="form-label">Nội dung : Mô tả khảo sát ...</label>
                        <textarea class="form-control" name="" id="" rows="1"></textarea>
                    </div>
                </div>
                <QuestionSurvey />
                <div v-for="(component, index) in components" :key="index">
                    <QuestionSurvey v-if="component.show" />
                </div>
             
            </form>
            <div class="d-flex justify-content-center align-items-center mt-5">  
                <button @click="addComponent" class="btn btn-success me-2">Thêm câu hỏi</button>
                <button @click="removeComponent" class="ml-2 btn btn-danger">Xóa câu hỏi</button>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionSurvey from './QuestionSurvey.vue'

export default {
    name: 'CreateQuestionText',
    components: {
        QuestionSurvey
    }, data() {
        return {
            components: []
        }
    },
    methods: {
        addComponent() {
            this.components.push({ show: true });
        },
        removeComponent() {
            // tìm phần tử đầu tiên có thuộc tính show là true và xóa nó đi
            const component = this.components.find(c => c.show);
            if (component) {
                component.show = false;
            }
        }
    },
}
</script>

<style>
.bg {
    background-color: #EEF0DA;
    padding: 30px;
}

.CreateQuestionContent .title,
.CreateQuestionContent .content {
    background-color: #E3E9F3;
    padding: 30px;
}

.CreateQuestionContent .content {
    border-bottom: 1px dashed black;
}

.text-bg {
    background-color: #D9D9D9;
}
</style>