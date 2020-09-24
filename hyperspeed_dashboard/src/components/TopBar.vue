<template>
	<div class="topBar">
		<div class="container height-100">
			<div class="row align-items-center height-100 card-m">
				<div class="col-6">
					<div class="row align-items-center">
						<img class="" src="../assets/dbs_logo.svg" width="67">
						<i class="fas fa-chevron-down black mleft-12"></i>
					</div>
				</div>
				<div class="col-6">
					<div class="float-right lineh-17">
							<span class="name black">{{profileName}}</span><br/>
							<span class="role d-none d-lg-block">{{ roleName.toUpperCase() }}</span>
					</div>
					<div class="float-right mright-36 mtop-8">
						<i class="far fa-bell fs-20 grey"></i>
					</div>
				</div>
			</div>
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
