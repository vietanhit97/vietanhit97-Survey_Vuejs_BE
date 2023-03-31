<template>
    <div class="wrapper">
        <PageHearder />
        <SaveContent/>
        <StatisticalSurvey />
    </div>
</template>

<script>
import PageHearder from './components/layout/PageHearder.vue'
// import PageFooter from './components/layout/PageFooter.vue'
import StatisticalSurvey from './components/StatisticalSurvey.vue'
import SaveContent from './components/SaveContent.vue'
export default {
    name: 'PageSurveySetup',
    components: {
        PageHearder, SaveContent,StatisticalSurvey
    }
}
</script>

<style>

</style>