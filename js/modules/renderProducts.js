import { productList } from "./../selectors.js";

export const renderProducts = (products) => {
    let markup = ``;

    products &&
        products.forEach((result) => {
            const { id, title, image, image_url, price, description, featured } = result;

            if (featured) {
                markup += `
                <div class="col-sm-6 col-md-4 ">
                <a href=${`/product.html?id=${id}`} class="text-decoration-none">
                    <div class="card">
                        <img src="${
                            image ? `http://localhost:1337${image.formats.small.url}` : image_url
                        }" class="card-img-top" alt="${result.title}">
                    <div class="card-header bg-warning text-dark text-center fs-5">
                        Featured
                    </div>
                        <div class="card-body">
                            <h4 class="card-title text-black fs-3">${title}</h4>
                            <p class="card-subtitle text-primary fs-3 fw-bold">£ ${price}</p>
                            <p class="card-text text-muted">${description}</p>
                            <button class="btn btn-lg btn-outline-info">More Details</button>
                        </div>
                    </div>
                    </a>
    
                </div>
          `;
            } else {
                markup += `
                <div class="col-sm-6 col-md-4 ">
                <a href=${`/product.html?id=${id}`} class="text-decoration-none">
                    <div class="card">
                        <img src="${
                            image ? `http://localhost:1337${image.formats.small.url}` : image_url
                        }" class="card-img-top" alt="${result.title}">
                        <div class="card-body">
                            <h4 class="card-title  text-black fs-3"">${title}</h4>
                            <p class="card-subtitle text-primary fs-3 fw-bold">£ ${price}</p>
                            <p class="card-text text-muted">${description}</p>
                            <button class="btn btn-lg btn-outline-info">More Details</button>
                        </div>
                    </div>
                    </a>
    
                </div>
          `;
            }
        });
    return markup;
};
