<template>
  <div id="nav">
    <TopBar/>
    <NavBar/>
    <!-- <router-link to="/">Home <i class="fab fa-medium"></i></router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import NavBar from '@/components/NavBar.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    TopBar,
    NavBar
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

</style>
