import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductsList from './components/ProductsList';
import CartButton from './components/cart/CartButton';


const app = createApp({
	data: () => ({
		cartProducts: [],
	}),
	methods: {
		addToCart(product){
			this.cartProducts.push(product);
		},
	},
});

app.component("product-list", ProductsList);
app.component("cart-button", CartButton);
app.mount("#app");
