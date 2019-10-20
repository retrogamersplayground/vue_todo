import Vue from 'vue'
import Router from 'vue-router'
import todoList from '@/components/todoList'
import header from '@/components/header'
import addTodo from '@/components/addTodo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: todoList
    },
    {
      path: '/addTodo',
      name: 'addTodo',
      component: addTodo
    }
    
  ]
})
