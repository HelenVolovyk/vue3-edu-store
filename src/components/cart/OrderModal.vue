<template>

  <div  class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalTitle">
            My Order
			</h5>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
			
					
					<order-products-list></order-products-list>
				
					<order-billing-form></order-billing-form>

  				
				  
			
        </div>
		
      
      </div>
    </div>
  </div>
  


</template>

<script>
import OrderProductsList from "./OrderProductsList.vue";
import OrderBillingForm from "./OrderBillingForm.vue";
export default {
  name: "OrderModal",
  components: {OrderBillingForm, OrderProductsList},
   computed: {
    totalAmount() {
      return this.$root.totalAmount;
    }
  }
}
</script>

<style scoped>
</style>