import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductsList from './components/ProductsList';
import OrderProductsList from './components/cart/OrderProductsList';
import CartButton from './components/cart/CartButton';
import CartModal from './components/cart/CartModal';
import OrderModal from './components/cart/OrderModal';


const app = createApp({
	data: () => ({
		cartProducts: [],
		cartUser: [],
	}),
	computed: {
		
	totalAmount() {
	return this.cartProducts.length;
}
	},
	methods: {
		addToCart(product){
			this.cartProducts.push({...product, amount: 1});
		},
		isInCart(id){
			return !!this.cartProducts.find((item) => item.id === id);
		},
		removeProduct(index){
			this.cartProducts.splice(index, 1);
		},
		addMore(index){
			const product = this.cartProducts[index];
			this.cartProducts.splice(index, 1, {...product, amount: product.amount+1});
		},
		removeOne(index){
			const product = this.cartProducts[index];
			this.cartProducts.splice(index, 1, {...product, amount: product.amount-1});
		},
		total(){
			return this.cartProducts.reduce((total, {price, amount}) => 
				 total + (amount * price), 0)
			},
		// addToOrder(user){
		// 	this.cartUser.push(user);
		// 	window.location.href = './components/cart/OrderModal.vue';
		// 	},	
		}

	
});

app.component("product-list", ProductsList);
app.component("order-products-list", OrderProductsList);
app.component("cart-button", CartButton);
app.component("cart-model", CartModal);
app.component("order-modal", OrderModal);
app.mount("#app");