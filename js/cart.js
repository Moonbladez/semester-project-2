import { renderProducts } from "./modules/renderProducts.js";
import { emptyCartAlert, cartTotal, productList, cartList } from "./selectors.js";

const products = JSON.parse(localStorage.getItem("cart"));
const sum = parseFloat(products.reduce((accumulator, current) => accumulator + current.price, 0)).toFixed(2);

if (products) {
    cartList.innerHTML = renderProducts(products);
    emptyCartAlert.classList.add("d-none");
    cartTotal.innerHTML = `£ ${sum}`;
} else {
    emptyCartAlert.classList.add("d-block");
}
