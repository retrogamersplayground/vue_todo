<template>
  <div>
    <app-header></app-header>
    <h1>Todo List</h1>
    <div class="todoDivWrapper">
      <div v-for="todo in todo" class="todoDiv">
        <p>Todo id: {{ todo.id }}</p>
        <p>Todo: {{ todo.singleTodo }}</p>
        <div v-html="todo.completeButton">{{ todo.completeButton }}</div>
        <div v-html="todo.deleteButton">{{ todo.deleteButton }}</div>
      </div>
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

.todoDivWrapper {
  width: 100%;
}

.todoDiv {
  width: 80%;
  background-color: yellow;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: center;
}

.todoDiv p {
  display: inline-block;
  margin-right: 20px;
  background-color: white;
  padding: 20px;
  color: purple;
  font-size: 16px;
}

.todoDiv div {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}

</style>
