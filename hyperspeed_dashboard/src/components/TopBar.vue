<template>
  <div class="topBar">
      <div class="logoNav">
        <img class="logo" src="../assets/dbs_logo.svg">
        <div class="dropdown">
            <i class="fas fa-chevron-down black"></i>
        </div>
      </div>
      <div class="profile">
          <p>{{profileName}}</p>
          <p>{{ roleName.toUpperCase() }}</p>
      </div>
      <div class="notification">

      </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data(){
    return{
        profileName: 'Piyush Gupta',
        roleName: 'Administrator',
    }
  },
}
</script>
