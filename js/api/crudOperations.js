// Config
const rootUrl = "http://localhost:1337";
const jwt = localStorage.getItem("jwt");

// Create
export const createProduct = async (product) => {
    const url = `${rootUrl}/products`;
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    };

    return fetch(url, options);
};

// Read
export const readProducts = async (productId) => {
    const url = productId ? `${rootUrl}/products/${productId}` : `${rootUrl}/products`;

    return fetch(url).then((response) => response.json());
};

// Update
export const updateProduct = async (id, product) => {
    const url = `${rootUrl}/products/${id}`;
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    };
    return fetch(url, options);
};

// Delete
export const deleteProduct = async (id) => {
    const url = `${rootUrl}/products/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    };
    return fetch(url, options);
};
