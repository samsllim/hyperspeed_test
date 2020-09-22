<template>
  	<div class="container mtop-40">
		<div class="row">
			<div class="col-5">
				<form>
					<div class="input-group width-100">
						<div class="input-group-prepend">
							<div class="input-group-text bg-white"><i class="fas fa-search"></i></div>
						</div>
						<input type="text" class="form-control left-border-none right-radius-none height-45px" placeholder="Username">
						<!-- <input type="text" class="form-control has-feedback has-feedback-left" required> -->
						<div class="input-group-append">
							<select class="custom-select width-118px bg-lighterGrey1">
								<option selected disabled value="">All</option>
								<option>...</option>
							</select>
						<!-- <button class="btn btn-outline-secondary" type="button">Button</button> -->
						</div>
					</div>
				</form>
			</div>
			<div class="col-7">
				<div class="row align-items-center">
					<div class="col-4">
						<div class="bg-white height-45px mleft-15 roundedCorner">
							<span class="icon-filled float-right bg-red roundedCorner"><i class="fas fa-exclamation-triangle red fs-20"></i></span>
							<div class="row mleft-15 align-items-center height-100 ">
								<span class="semi-bold fs-18 black">12</span>
								<span class="mleft-15">Notification</span>
							</div>
						</div>
					</div>
					<div class="col-4">
						<div class="bg-white height-45px mleft-15 roundedCorner">
							<span class="icon-filled float-right bg-orange roundedCorner"><i class="fas fa-info-circle orange fs-20"></i></span>
							<div class="row mleft-15 align-items-center height-100 ">
								<span class="semi-bold fs-18 black">6</span>
								<span class="mleft-15">Actions Required</span>
							</div>
						</div>
					</div>
					<div class="col-4">
						<div class="bg-white height-45px mleft-15 roundedCorner">
							<span class="icon-filled float-right bg-purple roundedCorner"><i class="fas fa-signature purple fs-20"></i></span>
							<div class="row mleft-15 align-items-center height-100 ">
								<span class="semi-bold fs-18 black">23</span>
								<span class="mleft-15">Pending Signature</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
	data(){
		return{
		}
	}
}
</script>
