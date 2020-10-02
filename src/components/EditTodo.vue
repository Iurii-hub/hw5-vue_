<template>
  <div v-if="todo.isShow">
    <h4>edit post</h4>
    <input type="text" placeholder="email" v-model="todo.email" />
    <br />
    <input type="text" placeholder="title" v-model="todo.title" />
    <br />
    <input type="text" placeholder="body" v-model="todo.body" />
    <br />
    <button @click="$emit('isshow')">Save</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style>

</style>