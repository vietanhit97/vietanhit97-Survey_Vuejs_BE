<template>
    <div class="wrapper">
        <PageHearderUser />
        <PreviewSurvey class="mt-5" />
    </div>
</template>

<script>
import PageHearderUser from './components/layout/PageHearderUser.vue'
import PreviewSurvey from './components/PreviewSurvey.vue'
export default {
    name: 'ListSurvey',
    components: { PreviewSurvey, PageHearderUser }
}
</script>

<style></style>