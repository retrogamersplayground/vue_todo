<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
 
}
.completeButton {
  padding: 20px;
  background-color:rgb(10, 235, 10);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  margin-top: 20px;
}

.deleteButton {
  padding: 20px;
  background-color: rgb(206, 14, 14);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  margin-top: 20px;
}
</style>
