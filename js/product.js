import { renderProduct } from "./modules/renderProduct.js";
import { renderProducts } from "./modules/renderProducts.js";
import { readProducts } from "./api/crudOperations.js";
import { featuredProducts } from "./selectors.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const products = await readProducts();
const singleProduct = products.filter((product) => String(product.id) === productId)[0];
const filteredProducts = products.filter((product) => product.featured);

renderProduct(singleProduct);
featuredProducts.innerHTML += renderProducts(filteredProducts);
