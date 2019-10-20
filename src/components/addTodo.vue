<template>
  <div>
      <app-header></app-header>
      <h2>Add todo</h2>
      <div>
          <form v-if="!submitted">
            <label for="">New Todo</label>
            <input type="text" v-model.lazy="todo.singleTodo" required/> 
            <div class="buttonDiv">
                <button v-on:click.prevent="post" class="button">Add Todo
                </button>
            </div>  
          </form>
      </div>
      <div v-if="submitted">
          <h3>Your todo is added to the todo list!</h3>
      </div>
      <div>
          <h2>Preview todos</h2>
          <p>{{ todo.singleTodo }}</p>
      </div>
  </div>
</template>

<script>
import header from './header.vue';
export default {
  components: {
    'app-header': header
  },
  data() {
      return {
          todo: {
              singleTodo: ''
          },
          submitted: false,
      }
  },
  methods: {
      post: function() {
        this.$http.post('https://todovue-eec68.firebaseio.com/posts.json', this.todo).then(function(data) {
            console.log(data);
            this.submitted = true;
        });
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}

form {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    background-color: gray;
    padding: 50px;
}

input {
    display: block;
    padding: 10px;
    width: 80%;
}

.buttonDiv {
    width: 100%;
    text-align: center;
}

.button {
    padding: 20px;
    background-color: #0E71CE;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 20px;

}
</style>