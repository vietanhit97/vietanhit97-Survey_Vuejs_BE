<template>
    <div class="wrapper">
        <PageHearder/>
        <ListEmployeeSurvey/>
        <PageFooter/>
    </div>
</template>

<script>
import PageHearder from './components/layout/PageHearder.vue'
import PageFooter from './components/layout/PageFooter.vue'
import ListEmployeeSurvey from './components/admin/ListEmployeeSurvey.vue'
export default {
    name:'PageListEmployeeSurvey',
    components: {
        PageHearder,PageFooter,ListEmployeeSurvey
    }
}
</script>

<style>

</style>