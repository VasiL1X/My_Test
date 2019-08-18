import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuelidate from 'vuelidate'
import ModalCourse from './pages/ModalCourse'
import ModalUser from './pages/ModalUser'
import ChangeUser from './pages/ChangeUser'
import ChangeCourse from './pages/ChangeCourse'
import Pagination from './pages/Pagination'

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.component('addCourse', ModalCourse);
Vue.component('addUser', ModalUser);
Vue.component('changeUser', ChangeUser);
Vue.component('changeCourse', ChangeCourse);
Vue.component('pagBar', Pagination);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
