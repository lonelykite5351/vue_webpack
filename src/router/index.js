import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 
import Hello2 from '@/components/Hello2' //輸出到頁面import

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld //輸出的內容
    },
    {
      path: '/Hello2',
      name: 'Hello2',
      component: Hello2
    }
  ]
})
