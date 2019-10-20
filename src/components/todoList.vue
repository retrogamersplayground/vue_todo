<template>
  <div>
    <app-header></app-header>
    <h1>Todo List</h1>
    <div v-for="todo in todo">
      <p>Todo id: {{ todo.id }}</p>
      <p>Todo: {{ todo.singleTodo }}</p>
    </div>
  </div>
</template>

<script>
import header from './header.vue'
export default {
  components: {
    'app-header': header
  },
  name: 'todoList',
  data () {
    return {
        todo: []
      }
    },
    methods: {
  },
  created() {
    this.$http.get('https://todovue-eec68.firebaseio.com/posts.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      var todosArray = [];
      for(let key in data) {
        data[key].id = key
        todosArray.push(data[key]);
      }
      this.todo = todosArray;
    })
  }
}
</script>


<style scoped>
h1 {
  text-align: center;
}
</style>
