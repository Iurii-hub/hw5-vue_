<template>
  <div>

    <ul class="nav nav-pills">

      <li class="nav-item">
        <router-link 
        class="nav-link" 
        active-class="active" 
        exact to="/">
        Home
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
        class="nav-link" 
        active-class="active" 
        to="Todo">
        Todo
        </router-link>
      </li>

    </ul>

  </div>
  
</template>


<script>
export default {
    name: "Header",
}

</script>

<style>
</style>