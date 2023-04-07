<template>
    <div class="wrapper">
        <PageHearderUser />
        <ConTentThanks />
        <PageFooter />
    </div>
</template>

<script>
import PageHearderUser from './components/layout/PageHearderUser.vue'
import PageFooter from './components/layout/PageFooter.vue'
import ConTentThanks from './components/ConTentThanks.vue'
export default {
    name: 'PageTY',
    components: {
        PageHearderUser, PageFooter,ConTentThanks
    }
}
</script>

<style></style>