<template>
    <div class="wrapper">
        <PageHearderUser />
        <UserSurvey />
        <PageFooter />
    </div>
</template>

<script>
import PageHearderUser from './components/layout/PageHearderUser.vue'
import PageFooter from './components/layout/PageFooter.vue'
import UserSurvey from './components/user/UserSurvey.vue'
export default {
    name: 'ListSurvey',
    components: { UserSurvey, PageHearderUser, PageFooter }
}
</script>

<style></style>