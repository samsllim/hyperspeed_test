<template>
  <div class="about">
    <h1>This is an {{title}} page</h1>
  </div>
</template>

<script>
export default {
	data(){
		return{
      title: this.$route.meta.title
		}
  },
  watch:{
    '$route.path' : function (val) {
      console.log(val)
      console.log(this.$route.name)
        this.title = this.$route.meta.title
    }
  }
}
</script>