import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
import Home from './PageListSurvey.vue'
import About from './PageSurveySetup.vue'
import Text from './PageCreateText.vue'
import PageListSurveyUser from './PageListSurveyUser.vue'
import PageSurveyUser from './PageSurveyUser.vue'
import PagePreviewSurvey from './PagePreviewSurvey.vue'
import PageListEmployeeSurvey from './PageListEmployeeSurvey.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/text',
      name: 'text',
      component: Text
    }, {
      path: '/user-listsurvey',
      name: 'user-listsurvey',
      component: PageListSurveyUser
    },
    {
      path: '/user-survey',
      name: 'user-survey',
      component: PageSurveyUser
    },
    {
      path: '/preview-survey',
      name: 'preview-survey',
      component: PagePreviewSurvey
    }, {
      path: '/list-employee',
      name: 'list-employee',
      component: PageListEmployeeSurvey
    },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
