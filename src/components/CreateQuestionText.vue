<template>
    <div class="CreateQuestionContent">
        <div class="container bg ">
            <form action="" v-if="currentQuestion">
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
                <div class="d-flex justify-content-center align-items-center mt-5">
                    <button @click="createNewQuestion" class="btn btn-success me-2">Thêm câu hỏi</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import QuestionSurvey from './QuestionSurvey.vue'

export default {
    name: 'CreateQuestionText',
    components: {
        QuestionSurvey
    },
    data() {
        return {
            currentQuestion: true // Ban đầu đang tạo câu hỏi đầu tiên
        }
    },
    methods: {
        createNewQuestion() {
            // Lưu trạng thái của câu hỏi hiện tại
            // Ví dụ: lưu vào một biến questions
            this.questions.push(this.currentQuestion);
            // Thiết lập biến currentQuestion để tạo câu hỏi mới
            this.currentQuestion = true;
        }
    }
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