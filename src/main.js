import Vue from 'vue'
import App from './App'
import router from './router'

import store from '@/store'

//import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Icon, Button, Rate
} from 'element-ui';

Vue.use(Icon).use(Button).use(Rate);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

