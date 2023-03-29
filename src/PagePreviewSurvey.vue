<template>
    <div class="wrapper">
        <PageHearder />
        <SaveContent/>
        <PreviewSurvey />
    </div>
</template>

<script>
import PageHearder from './components/layout/PageHearder.vue'
import PreviewSurvey from './components/PreviewSurvey.vue'
import SaveContent from './components/SaveContent.vue'
export default {
    name: 'PageSurveySetup',
    components: {
        PageHearder, PreviewSurvey,SaveContent
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