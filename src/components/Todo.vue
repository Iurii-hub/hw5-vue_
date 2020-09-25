<template>
  <div>
    
    <input type="text" v-model="todo">
    <button @click="add" v-if="arrayToDo.length <10">Add</button>

    <ul >
      <li v-for="(item, i) in arrayToDo" :key="i">
        <span>{{item}}</span>
        <button @click="remove(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      message: "HomeWork-1",
      todo: "",
      arrayToDo: [],
    }
  },
 
  methods: {
    add() {
      if (this.todo){
        this.arrayToDo.push(this.todo);
        this.todo = "";
      }
  
    },
    // remove(i){
    //   this.arrayToDo.splice(i, 1);
    // },

    
  }
}
</script>

<style>
</style>