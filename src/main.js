import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
// import vi from 'vee-validate/dist/locale/en.json';
// import * as rules from 'vee-validate/dist/rules';
// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });
// localize('vi', vi);
// Vue.component('ValidationObserver', ValidationObserver);
// Vue.component('ValidationProvider', ValidationProvider);
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
import PageFormCreateEmployee from './PageFormCreateEmployee.vue'
import PageStatisticalSurvey from './PageStatisticalSurvey.vue'
import PageExternalUsers from './PageExternalUsers.vue'
import PageTY from './PageTY.vue'
import PageRegisterUser from './PageRegisterUser.vue'
import PageRegiterSuccess from './PageRegiterSuccess.vue'
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
      path: '/user-survey/:id',
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
    {
      path: '/create-employee',
      name: 'create-employee',
      component: PageFormCreateEmployee
    },
    {
      path: '/statistical-employee',
      name: 'statistical-employee',
      component: PageStatisticalSurvey
    },
    {
      path: '/external-users',
      name: 'external-users',
      component: PageExternalUsers
    },
    {
      path: '/tk-user',
      name: 'tk-user',
      component: PageTY
    },
    {
      path: '/register-user',
      name: 'register-user',
      component: PageRegisterUser
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: PageRegiterSuccess
    },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
