<template>
  <h5>
    Billing details
  </h5>
  <form @submit.prevent="placeOrder" class="row g-3 mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" :class="{'form-control': true, 'is-invalid': !isFirstNameValid}" id="firstName" placeholder="First Name">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input  v-model="lastName" type="text" :class="{'form-control': true, 'is-invalid': !isLastNameValid}" id="lastName" placeholder="Last Name">
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input  v-model="city" type="text" :class="{'form-control': true, 'is-invalid': !isCityValid}" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input  v-model="address" type="text" :class="{'form-control': true, 'is-invalid': !isAddressValid}" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input  v-model="email" type="email" :class="{'form-control': true, 'is-invalid': !isEmailValid}" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input  v-model="phone" type="text" :class="{'form-control': true, 'is-invalid': !isPhoneValid}" id="phone" placeholder="+38(099) 999-99-99">
    </div>
	   <div class="modal-footer">
          <button 
			 @click="addToOrder"
			
			 type="button" class="btn btn-success">Place Order</button>
        </div>
  </form>
</template>

<script>

export default {
  name: "CartBillingForm", 

data () {
  return {
	   firstName: "", 
		lastName: "",
		city: "",
		address: "", 
		email: "",
		phone: "",
		isFirstNameValid: true,
		isLastNameValid: true,
		isCityValid: true,
		isAddressValid: true,
		isEmailValid: true,
		isPhoneValid: true,
		msg: [],
		products:[]
    }
},

  watch: {
	  firstName(newValue){
			this.isFirstNameValid = true;
			let checkFirstName = /[a-zA-Z]+/g;
	   if ((newValue === "")
          || (newValue.length > 10)
          || !checkFirstName.test(firstName)){
        	this.isFirstNameValid = false;
        
      }
	  }, 
	  lastName(newValue){
		  this.isLastNameValid = true;
		  let checkLastName = /[a-zA-Z]+/g;
		  if ((newValue === "")
          || (newValue.length > 25)
          || !checkLastName.test(lastName)) {
			 this.isLastNameValid = false;
			 
		  }
	  },
	  city(newValue){
		  this.isCityValid = true;
		  let checkCity = /[a-zA-Z]+/g;
		  if ((newValue === "")
		
		   || !checkCity.test(city)) {
		  this.isCityValid = false;
		 
		  }
	  },
	  address(newValue){
		  this.isAddressValid = true;
			if ((newValue === "")
			 || (newValue.length > 25)){
			this.isAddressValid = false;
			}
	  },
	  email(newValue){
			let checkEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ ;
		 	this.isEmailValid = function(){
			 return(this.email == "")? "":
			 (this.checkEmail(this.email))? true : false;
		 } 
		 
	  }, 
	  phone(newValue){
		   let checkPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
		   this.isPhoneValid = function(){
			return(this. phone == "")? "":
			(this.checkPhone(this.phone))? true : false;
		  }

		  }
	  
  },

 computed: {
    hasErrors() {
		return !this.isFirstNameValid || !this.isLastNameValid || !this.isCityValid || !this.isAddressValid || !this.isEmailValid || !this.isPhoneValid;
		
    }
  },
  	methods: {
		addToOrder() {
			this.getProducts();
			const user = {
				'firstName': this.firstName,
				'lastName,': this.lastName,
				'city': this.city,
				'address':  this.address,
				'email': this.email,
				'phone': this.phone
			}
			console.log(this.products);
			console.log(user);
	
		},
		getProducts() {
      	this.products = this.$root.cartProducts;
    },
	},
}
</script>

<style scoped>
</style>
