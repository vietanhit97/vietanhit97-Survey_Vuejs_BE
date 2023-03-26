<template>
  <PageSurveySetup />
</template>

<script>
import PageSurveySetup from './PageSurveySetup.vue'

export default {
  name: 'App',
  components: {
    PageSurveySetup
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  overflow-x: hidden;

}

.wrapper {
  min-height: 100vh;
  /* đặt chiều cao tối thiểu bằng chiều cao của viewport */
  display: flex;
  /* sử dụng flexbox */
  flex-direction: column;
  /* xếp các phần tử theo chiều dọc */
}
</style>
