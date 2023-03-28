<template>
    <div class="wrapper">
        <PageHearderUser />
        <ListUserSurvey />
        <PageFooter />
    </div>
</template>

<script>
import PageHearderUser from './components/layout/PageHearderUser.vue'
import PageFooter from './components/layout/PageFooter.vue'
import ListUserSurvey from './components/user/ListUserSurvey.vue'
export default {
    name: 'ListSurvey',
    components: { ListUserSurvey, PageHearderUser, PageFooter }
}
</script>

<style></style>