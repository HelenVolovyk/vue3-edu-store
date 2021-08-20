<template>
  <table class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>

    <cart-product-item
        v-for="(product, index) in products"
        :key="product.id"
		  :id ="product.id"
        :name="product.name"
        :price="product.price"
        :amount="product.amount"
        :image="product.image"
		  :index="index"
    />

    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{ totalQuantity }}</td>
      <td class="text-end">${{ totalCost }}</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import OrderProductItems from "./OrderProductItems.vue";
export default {
  name: "OrderProductsList",
  components: {OrderProductItems},
  computed: {
    products() {
      return this.$root.cartProducts;
    },
	  totalAmount() {
      return this.$root.totalAmount;
	 },
	  total() {
      return this.$root.total;
	 },
	 totalCost(){
		 let result = [];
		 for(let product of this.$root.cartProducts){
			 result.push(product.price*product.amount)
		 }
		 result = result.reduce(function(sum, el){
			 return sum + el;
		 })
		 return result;
	 },
	 totalQuantity(){
		 let result = [];
		 for(let product of this.$root.cartProducts){
			 result.push(product.amount)
		 }
		 result = result.reduce(function(sum, el){
			 return sum + el;
		 })
		 return result;
	 },
	 
  }
}
</script>

<style scoped>
</style>