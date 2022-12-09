import * as api from "./api/crudOperations.js";
import { renderProductTable } from "./modules/renderProductTable.js";
import { renderProductForm } from "./modules/renderProductForm.js";
import { loginUser, logoutUser } from "./api/loginOperations.js";
import { loginForm, productContainer, productTableList, addProductForm, logoutBtn } from "./selectors.js";

const products = await api.readProducts();

const isLoggedIn = localStorage.getItem("jwt");

if (isLoggedIn) {
    loginForm.classList.add("d-none");
    logoutBtn.classList.add("d-block");
} else {
    loginForm.classList.add("d-block");
    productContainer.classList.toggle("d-none");
    addProductForm.classList.toggle("d-none");
    logoutBtn.classList.add("d-none");
}

productTableList.innerHTML = renderProductTable(products);

document.addEventListener("click", async (event) => {
    const eventTargetId = event.target.id;
    const productId = event.target.getAttribute("data-product-id");

    switch (eventTargetId) {
        case "login-submit":
            const email = document.getElementById("email-input").value;
            const password = document.getElementById("password-input").value;
            loginUser(email, password);
            break;
        case "logout-button":
            logoutUser();
            break;
        case "toggle-new-product":
            addProductForm.innerHTML = renderProductForm("add");
            break;
        case "add-product-submit":
            const newProduct = {
                image_url: document.getElementById("add-product-image").value,
                title: document.getElementById("add-product-name").value,
                description: document.getElementById("add-product-description").value,
                price: document.getElementById("add-product-price").value,
                featured: document.getElementById("add-product-featured").checked,
            };

            api.createProduct(newProduct);
            window.location.reload();

        case "cancel-product-submit":
            addProductForm.innerHTML = null;
            break;
        case "edit-product-btn":
            const filteredProductById = products.filter((product) => String(product.id) === productId)[0];

            addProductForm.innerHTML = renderProductForm("edit", filteredProductById);
            break;
        case "edit-product-submit":
            const updatedProduct = {
                image_url: document.getElementById("add-product-image").value,
                title: document.getElementById("add-product-name").value,
                description: document.getElementById("add-product-description").value,
                price: Number(document.getElementById("add-product-price").value || 0),
                featured: document.getElementById("add-product-featured").checked,
            };

            api.updateProduct(productId, updatedProduct);
            window.location.reload();
            break;
        case "delete-product-btn":
            console.log(document.getElementById("confirm-delete"));
            document.getElementById("confirm-delete-btn").setAttribute("data-product-id", productId);
            break;
        case "confirm-delete-btn":
            api.deleteProduct(productId);
            window.location.reload();
            break;
    }
});
