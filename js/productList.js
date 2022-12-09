import { readProducts } from "./api/crudOperations.js";
import { renderProducts } from "./modules/renderProducts.js";
import { productList, searchBar, searchButton } from "./selectors.js";

const products = await readProducts();
productList.innerHTML = renderProducts(products);

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchTerm = searchBar.value;

    const filteredProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!filteredProducts.length) {
        productList.innerHTML = `<p>Sorry! We can't find any products maching your search term.</p>`;
    } else {
        productList.innerHTML = renderProducts(filteredProducts);
    }
});
