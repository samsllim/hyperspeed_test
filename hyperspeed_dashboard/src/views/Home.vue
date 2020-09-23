<template>
  	<div class="container mtop-40">
		<div class="row">
			<div class="col-5 pleft-0">
				<form>
					<div class="input-group width-100">
						<div class="input-group-prepend">
							<div class="input-group-text bg-white roundedCorner"><i class="fas fa-search"></i></div>
						</div>
						<input type="text" class="form-control left-border-none right-radius-none height-45px" placeholder="Username">
						<div class="input-group-append">
							<select class="custom-select width-118px bg-lighterGrey1">
								<option selected disabled value="">All</option>
								<option>...</option>
							</select>
						</div>
					</div>
				</form>
			</div>
			<div class="col-7 pright-0">
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
					<div class="col-4 pright-0">
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

		<div class="row mtop-27">
			<div class="col-8 bg-white roundedCorner">
				<div class="row ptop-11">
					<div class="col-5">
						<div class="row height-100 align-items-center">
							<span class="col-title">Latest</span>
						</div>
					</div>
					<div class="col-3">
						<div class="row height-100 align-items-center black semi-bold fs-13 justify-content-end">
							Show &nbsp;<span class="lightBlue"> 10 <i class="fas fa-chevron-down fs-10"></i></span>&nbsp; Deadlines
						</div>
					</div>
					<div class="col-4">
						<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text bg-white roundedCorner border-lighter-gray1"><i class="fas fa-search"></i></div>
						</div>
							<input type="text" class="form-control left-border-none height-35px border-lighter-gray1" placeholder="Search for a task...">
						</div>
					</div>
				</div>
				<div class="row ptop-11">
					<div class="col-12">
						<table class="table table-curved">
						<thead>
						<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
						</tr>
						</thead>
						<tbody>
						<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						</tr>
						<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						</tr>
						<tr>
						<th scope="row">3</th>
						<td colspan="2">Larry the Bird</td>
						<td>@twitter</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
				<div class="row ptop-10">
					<div class="col-4 ptop-8">
						<span class="black fs-13 semi-bold ">Showing 1 to 10 of 52 Deadlines</span>
					</div>
					<div class="col-8">
						<nav class="float-right">
							<ul class="pagination">
								<li class="page-item">
								<a class="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
								</a>
								</li>
								<li class="page-item active"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item">
								<a class="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
								</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div class="col-4 pleft-0 pright-0">
				<div class="mleft-25 row bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<span class="col-title ">Recent Activities</span>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><span class="black">Lam Chee Kin</span><br/>
								<span class="fs-13">has downloaded file "FY-18-signed"</span>	
								<span class="float-right lightGrey1 fs-13">
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><span class="black">Lam Chee Kin</span><br/>
								<span class="fs-13">has downloaded file "FY-18-signed"</span>	
								<span class="float-right lightGrey1 fs-13">
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 height-100 width-100">
								<br/><span class="black">Lam Chee Kin</span><br/>
								<span class="fs-13">has downloaded file "FY-18-signed"</span>	
								<span class="float-right lightGrey1 fs-13">
									22-08-2020
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mtop-27">
			<div class="col-4">
				<div class="row bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<div class="col-6 pleft-0">
								<span class="col-title">Directors</span>
							</div>
							<div class="col-6">
								<div class="float-right">
								<router-link to="/" class="float-right r-link fs-13">See All</router-link>
								</div>
							</div>
							
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="35">&nbsp;&nbsp;<span class="black"> Lam Chee Kin</span>
								<span class="float-right lightGrey1 fs-13 text-right">
									Appointment Date:<br/>
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="35">&nbsp;&nbsp;<span class="black"> Lam Chee Kin</span>
								<span class="float-right lightGrey1 fs-13 text-right">
									Appointment Date:<br/>
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 height-100 width-100">
								<br/><img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="35">&nbsp;&nbsp;<span class="black"> Lam Chee Kin</span>
								<span class="float-right lightGrey1 fs-13 text-right">
									Appointment Date:<br/>
									22-08-2020
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-4 pleft-0">
				<div class="mleft-25 row bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<div class="col-6 pleft-0">
								<span class="col-title">Shareholders</span>
							</div>
							<div class="col-6">
								<div class="float-right">
								<router-link to="/" class="float-right r-link fs-13">See All</router-link>
								</div>
							</div>
							
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><img src="https://picsum.photos/100" class="rounded" alt="" width="auto" height="42">&nbsp;&nbsp;<span class="black"> Citibank Nominee Singapore Pte Ltd</span>
								<span class="float-right lightGrey1 fs-13 text-right">
									Appointment Date:<br/>
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><img src="https://picsum.photos/100" class="rounded" alt="" width="auto" height="42">&nbsp;&nbsp;<span class="black"> Lam Chee Kin</span>
								<span class="float-right lightGrey1 fs-13 text-right">
									Appointment Date:<br/>
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 height-100 width-100">
								<br/><img src="https://picsum.photos/100" class="rounded" alt="" width="auto" height="42">&nbsp;&nbsp;<span class="black"> Lam Chee Kin</span>
								<span class="float-right lightGrey1 fs-13 text-right">
									Appointment Date:<br/>
									22-08-2020
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-4 pleft-0 pright-0">
				<div class="mleft-25 row bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<div class="col-6 pleft-0">
								<span class="col-title">Corporate Secretary</span>
							</div>
							<div class="col-6">
								<div class="float-right">
								<router-link to="/" class="float-right r-link fs-13">More Details</router-link>
								</div>
							</div>
							
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><span class="black">Lam Chee Kin</span><br/>
								<span class="fs-13">has downloaded file "FY-18-signed"</span>	
								<span class="float-right lightGrey1 fs-13">
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<br/><span class="black">Lam Chee Kin</span><br/>
								<span class="fs-13">has downloaded file "FY-18-signed"</span>	
								<span class="float-right lightGrey1 fs-13">
									22-08-2020
								</span>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 height-100 width-100">
								<br/><span class="black">Lam Chee Kin</span><br/>
								<span class="fs-13">has downloaded file "FY-18-signed"</span>	
								<span class="float-right lightGrey1 fs-13">
									22-08-2020
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mtop-27">
			<div class="col-12 pleft-0 pright-0 bg-white roundedCorner">
			<div class="mleft-25 row bg-white roundedCorner">
			<div class="col-12 bg-white roundedCorner">
				<div class="row ptop-11">
					<div class="col-12 pleft-0">
						<div class="row height-100 align-items-center">
							<span class="col-title">Important Dates</span>
						</div>
					</div>
				</div>
				<div class="row ptop-11">
					<div class="col-12 pleft-0">
						<table class="table table-curved">
						<thead>
						<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
						</tr>
						</thead>
						<tbody>
						<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						</tr>
						<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						</tr>
						<tr>
						<th scope="row">3</th>
						<td colspan="2">Larry the Bird</td>
						<td>@twitter</td>
						</tr>
						</tbody>
						</table>
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
			page: 1,
		}
	},
	methods: {
		clickCallback(pageNum) {
			console.log(pageNum)
		}
	}
}
</script>
