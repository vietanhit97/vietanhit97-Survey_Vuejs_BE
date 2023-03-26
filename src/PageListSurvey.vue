<template>
    <div class="wrapper">
        <PageHearder/>
        <ContentListSurvey />
        <div class="container">
            <FormListSurvey />
            <TableComp/>
            <PaginateComp />
        </div>
        <PageFooter/>
    </div>
</template>

<script>
import PaginateComp from './components/PaginateComp.vue'
import PageHearder from './components/layout/PageHearder.vue'
import PageFooter from './components/layout/PageFooter.vue'
import TableComp from './components/TableComp.vue'
import FormListSurvey from './components/FormListSurvey.vue'
import ContentListSurvey from './components/ContentListSurvey.vue'
export default {
    name: 'ListSurvey',
    components: { PaginateComp, FormListSurvey, ContentListSurvey, TableComp,PageHearder,PageFooter }
}
</script>

<style>

</style>