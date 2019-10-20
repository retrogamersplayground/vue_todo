<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <router-link to="/todoList">Home</router-link>
                    </li>
                    <li>
                        <router-link to='/addTodo' exact>Add todo
                        </router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'header',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #ffffff;
    font-size: 24px;
}

ul {
    list-style-type: none;
}

li {
    display: inline-block;
    padding: 20px;
}

header {
    background-color: rgb(14, 113, 206);
}
</style>