import { productImage, productTitle, productPrice, productDescription, addToCartButton } from "./../selectors.js";

export const renderProduct = (product) => {
    const { title, price, description, image, image_url } = product;

    productImage.src = `http://localhost:1337${image ? image.formats.small.url : image_url}`;
    productTitle.innerHTML = `${title}`;
    productPrice.innerHTML = `£ ${price}`;
    productDescription.innerHTML = `${description}`;
    addToCartButton.addEventListener("click", (event) => {
        const receivedLocalStorage = JSON.parse(window.localStorage.getItem("cart")) || [];
        const combineCart = [...receivedLocalStorage, product];
        window.localStorage.setItem("cart", JSON.stringify(combineCart));
        addToCartButton.innerHTML = "Added to cart, add again?";
    });
};
