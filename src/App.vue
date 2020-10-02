<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- Давайте спробуємо переробити наш тудуліст з використанням Vuex В state в нас має бути масив todo: [] 
    В actions в нас має бути 3 метода remove, add, get 
    Змінюємо масив todo через mutations
    В getters можемо добавити метод який буде перевіряти довжину нашого масиву.
     -->

    <h1>Vuex</h1>
    
    <Header/>
    <router-view/>

     
  </div>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
}
</style>
