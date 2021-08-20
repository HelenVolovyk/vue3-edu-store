<template>
  <h5>
  My details
  </h5>
  <form class="row g-3 mb-3">
    <div class="col-md-6">
  
 	<h3>{{ firstName }}</h3>

    </div>
    <div class="col-md-6">
     <h3>{{ lastName }}</h3>
    </div>
    <div class="col-6">
    <h3>{{ city }}</h3>
    </div>
    <div class="col-6">
		<h3>{{ address }}</h3>
    </div>
    <div class="col-md-6">
    <h3>{{ email }}</h3>
    </div>
    <div class="col-md-6">
   <h3>{{ phone }}</h3>
    </div>
	
  </form>
</template>

<script>
export default {
  name: "OrderBillingForm", 
  props: {

		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		city: {
			type: String,
		},
		address: {
			type: String,
		},
		email: {
			type: String,
		},
		phone:{
			type: Number,
		},
		id: Number
	},
  }
 


</script>

<style scoped>
</style>
