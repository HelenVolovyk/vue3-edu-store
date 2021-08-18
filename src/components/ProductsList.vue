<template>
  <main>
  <div class="container">
      <div class="card my-5 shadow">
        <div class="card-body">
          <div class="row">
	
	<product
		v-for="product in products"
		:key="product.id"
		:name ="product.name"
		:category ="product.category"
		:price ="product.price"
		:image ="product.image"
		:isAvailable ="product.is_available"
		@add-to-cart="addToCart(product)"
	/>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import Product from './Product.vue';
export default{
   components: { Product },
	name: "ProductsList",
		data: () => ({
			products:[
			]
		}),
		mounted() {
		this.fetchProducts();
		},
	methods: {
		async	fetchProducts() {
				const response = await fetch("http://localhost:3000/products");
				const products = await response.json();
				this.products = products;
			},
			addToCart(product){
				this.$root.addToCart(product);
			}
		}
	}
</script>



<style>

</style>
