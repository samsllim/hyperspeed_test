<template>
  	<div class="container mtop-40">
		<div class="row">
			<div class="col-lg-5 col-md-12">
				<form class="card-m">
					<div class='search'>
						<div class="input-group width-100">
							<div class="input-group-prepend">
								<div class="input-group-text bg-white roundedCorner"><i class="fas fa-search"></i></div>
							</div>
							<input type="text" class="form-control left-border-none right-radius-none height-45px search__field" placeholder="Username" v-on:focus="searchFocus = true" @blur="searchFocus = false" v-model="search">
							<div class="input-group-append">
								<select class="custom-select bg-lighterGrey1">
									<option selected disabled value="">All</option>
									<option>...</option>
								</select>
							</div>
						</div>
						<div class="search__autocomplete" ref="searchSuggestion" v-show="searchFocus">
							<div class='autocomplete'>
								<div class='autocomplete__item'><i class="fas fa-search"></i> <span class="ml-3">Search suggestion 1</span></div>
								<div class='autocomplete__item'><i class="fas fa-search"></i> <span class="ml-3">Search suggestion 2</span></div>
								<div class='autocomplete__item'><i class="fas fa-search"></i> <span class="ml-3">Search suggestion 3</span></div>
								<div class='autocomplete__item primary' @click="searchFocus = false"><i class="fas fa-search"></i> <span class="ml-3">Search for {{search}}</span></div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-lg-7 col-md-12">
				<div class="row align-items-center">
					<div class="col-md-4 col-sm-12 sm-card-row-m">
						<div class="bg-white height-45px card-m roundedCorner">
							<span class="icon-filled float-right bg-red roundedCorner"><i class="fas fa-exclamation-triangle red fs-20"></i></span>
							<div class="row mleft-15 align-items-center height-100 ">
								<span class="semi-bold fs-18 black">12</span>
								<span class="mleft-15">Notification</span>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-12 sm-card-row-m">
						<div class="bg-white height-45px card-m roundedCorner">
							<span class="icon-filled float-right bg-orange roundedCorner"><i class="fas fa-info-circle orange fs-20"></i></span>
							<div class="row mleft-15 align-items-center height-100 ">
								<span class="semi-bold fs-18 black">6</span>
								<span class="mleft-15">Actions Required</span>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-12 sm-card-row-m">
						<div class="bg-white height-45px card-m roundedCorner">
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

		<div class="row card-row-m">
			<div class="col-lg-8 col-12">
				<div class="card-m bg-white roundedCorner">
					<div class="row ptop-11 card-m">
						<div class="col-lg-5 col-4">
							<div class="row height-100 align-items-center">
								<span class="col-title">Latest</span>
							</div>
						</div>
						<div class="col-lg-3 d-none d-lg-block">
							<div class="row height-100 align-items-center black semi-bold fs-13 justify-content-end">
								Show &nbsp;<span class="lightBlue"> 10 <i class="fas fa-chevron-down fs-10"></i></span>&nbsp; Deadlines
							</div>
						</div>
						<div class="col-lg-4 col-8">
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text bg-white roundedCorner border-lighter-gray1"><i class="fas fa-search"></i></div>
								</div>
								<input type="text" class="form-control left-border-none height-35px border-lighter-gray1" placeholder="Search for a task...">
							</div>
						</div>
					</div>
					<div class="row ptop-11 card-m">
						<div class="col-12 table-responsive">
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
					<div class="row ptop-10 card-m">
						<div class="col-4 ptop-8 d-none d-lg-block">
							<span class="black fs-13 semi-bold ">Showing 1 to 10 of 52 Deadlines</span>
						</div>
						<div class="col-lg-8 col-12">
							<nav class="float-right">
								<ul class="pagination">
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Previous" @click="page > 1 ? page -= 1 : ''">
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li :class="'page-item' + (page == n ? ' active' : '')" v-for="(n, index) in totalPage" :key="index">
										<a class="page-link" href="#" @click="page = n">{{n}}</a>
									</li>
									<li class="page-item">
									<a class="page-link" href="#" aria-label="Next" @click="page < totalPage ? page += 1 : ''">
										<span aria-hidden="true">&raquo;</span>
									</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-12 lg-card-row-m">
				<div class="row bg-white card-m roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<span class="col-title ">Recent Activities</span>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-8">
										<span class="black">Lam Chee Kin</span><br/>
										<span class="fs-13">has downloaded file "FY-18-signed"</span>
									</div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-8">
										<span class="black">Lam Chee Kin</span><br/>
										<span class="fs-13">has downloaded file "FY-18-signed"</span>
									</div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-8">
										<span class="black">Lam Chee Kin</span><br/>
										<span class="fs-13">has downloaded file "FY-18-signed"</span>
									</div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row card-row-m">
			<div class="col-lg-4 col-12">
				<div class="row card-m bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<div class="col-6 pleft-0">
								<span class="col-title">Directors</span>
							</div>
							<div class="col-6">
								<div class="float-right">
								<router-link to="/directors" class="float-right r-link fs-13">See All</router-link>
								</div>
							</div>
							
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-2"><img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="35"></div>
									<div class="col-6"><span class="black">Piyush Gupta</span></div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-2"><img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="35"></div>
									<div class="col-6"><span class="black">Piyush Gupta</span></div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-2"><img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="35"></div>
									<div class="col-6"><span class="black">Piyush Gupta</span></div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-12 lg-card-row-m">
				<div class="card-m row bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<div class="col-6 pleft-0">
								<span class="col-title">Shareholders</span>
							</div>
							<div class="col-6">
								<div class="float-right">
								<router-link to="/shareholders" class="float-right r-link fs-13">See All</router-link>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-2"><img src="https://picsum.photos/100" class="rounded" alt="" width="auto" height="42"></div>
									<div class="col-6"><span class="black"> Citibank Nominee<br/>Singapore Pte Ltd</span></div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-2"><img src="https://picsum.photos/100" class="rounded" alt="" width="auto" height="42"></div>
									<div class="col-6"><span class="black"> Citibank Nominee<br/>Singapore Pte Ltd</span></div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
						<div class="row height-69px">
							<div class="mleft-20 mright-20 btm-border-light-grey height-100 width-100">
								<div class="row align-items-center ptop-10">
									<div class="col-2"><img src="https://picsum.photos/100" class="rounded" alt="" width="auto" height="42"></div>
									<div class="col-6"><span class="black"> Citibank Nominee<br/>Singapore Pte Ltd</span></div>
									<div class="col-4 text-right"><span class="lightGrey1 fs-13 ">
										Appointment Date:<br/>
										22-08-2020
									</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-12 lg-card-row-m">
				<div class="card-m row bg-white roundedCorner">
					<div class="col-12 height-100">
						<div class="row height-35px align-items-center">
							<div class="col-6 pleft-0">
								<span class="col-title">Corporate Secretary</span>
							</div>
							<div class="col-6">
								<div class="float-right">
								<router-link to="/corporate-secretary" class="float-right r-link fs-13">More Details</router-link>
								</div>
							</div>
							
						</div>
						<div class="row height-130px">
							<div class="mleft-20 mright-20 height-100 width-100">
								<div class="row align-items-center ptop-16">
									<div class="col-4">
										<img src="https://picsum.photos/100" class="round-img" alt="" width="auto" height="81">
									</div>
									<div class="col-6">
										<span class="black fs-17">Piyush Gupta</span><br/>
										<span class="lightGrey">Citibank Nominee Singapore</span>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row card-row-m">
			<div class="col-12">
			<div class="card-m bg-white roundedCorner">
				<div class="row ptop-11 card-m">
					<div class="col-12">
						<div class="row height-100 align-items-center">
							<span class="col-title">Important Dates</span>
						</div>
					</div>
				</div>
				<div class="row ptop-11 card-m">
					<div class="col-12 table-responsive">
						<table class="table table-curved">
							<thead>
							<tr>
								<th class="cell-middle" rowspan="2" scope="col">FYE Year / Actual FYE</th>
								<th class="text-center" colspan="2" scope="col">AGM</th>
								<th class="text-center" colspan="2" scope="col">AR</th>
								<th class="text-center" colspan="2" scope="col">ECI</th>
							</tr>
							<tr>
								<th scope="col">Due Date</th>
								<th scope="col">Held Date</th>
								<th scope="col">Due Date</th>
								<th scope="col">Filling Date</th>
								<th scope="col">Due Date</th>
								<th scope="col">Filling Date</th>
							</tr>
							</thead>
							<tbody>
								<tr v-for="(data2,index) in tableData2" :key="index">
									<td>{{data2.col1}}</td>
									<td>{{data2.col2}}</td>
									<td>{{data2.col3}}</td>
									<td>{{data2.col4}}</td>
									<td>{{data2.col5}}</td>
									<td>{{data2.col6}}</td>
									<td>{{data2.col7}}</td>
								</tr>
							</tbody>
						</table>
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
			totalPage: 4,
			searchFocus: false,
			search: '',
			tableData2:[
				{
					col1: 'Past year - 31-12-2019',
					col2: '31-12-2019',
					col3: '31-12-2019',
					col4: '',
					col5: '31-12-2019',
					col6: '',
					col7: '31-12-2019',
				},
				{
					col1: 'Current year - 31-12-2020',
					col2: '',
					col3: '31-12-2020',
					col4: '31-12-2020',
					col5: '31-12-2020',
					col6: '',
					col7: '31-12-2020',
				},
				{
					col1: 'Next year - 31-12-2021',
					col2: '31-12-2021',
					col3: '31-12-2021',
					col4: '31-12-2021',
					col5: '31-12-2021',
					col6: '31-12-2021',
					col7: '',
				},
			]
		}
	},
	methods: {

	}
}
</script>
