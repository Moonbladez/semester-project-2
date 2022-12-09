import { readProducts } from "./api/crudOperations.js";
import { renderBanner } from "./modules/renderBanner.js";
import { renderProducts } from "./modules/renderProducts.js";
import { banner, productList } from "./selectors.js";

const bannerImage = await fetch("http://localhost:1337/home").then((banner) => banner.json());
banner.innerHTML = renderBanner(bannerImage);
const products = await readProducts();
const featuredProducts = products.filter((product) => product.featured);
productList.innerHTML = renderProducts(featuredProducts);
