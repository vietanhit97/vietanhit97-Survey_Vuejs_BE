<template>
    <div class="wrapper">
        <PageHearder />
        <CreateQuestionContent />
        <PageFooter />
    </div>
</template>

<script>
import PageHearder from './components/layout/PageHearder.vue'
import PageFooter from './components/layout/PageFooter.vue'
import CreateQuestionContent from './components/CreateQuestionContent.vue'

export default {
    name: 'PageSurveySetup',
    components: {
        PageHearder, PageFooter, CreateQuestionContent
    }
}
</script>

<style>
.wrapper {
    min-height: 100vh;
    /* đặt chiều cao tối thiểu bằng chiều cao của viewport */
    display: flex;
    /* sử dụng flexbox */
    flex-direction: column;
    /* xếp các phần tử theo chiều dọc */
}
</style>