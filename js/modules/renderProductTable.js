export const renderProductTable = (products) => {
    let markup = "";

    products &&
        products.forEach((result) => {
            const { id, title, image, price, description, featured } = result;

            markup += `
              <tr>
                <th scope="row">${id}</th>
                <td>${title}</td>
                <td>${price}</td>
                <td class="d-none d-lg-block">${description}</td>
                <td>${featured}</td>
                <td>
                  <button 
                    id="edit-product-btn" 
                    class="text-white btn-info btn" 
                    data-product-id=${id} 
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    id="delete-product-btn" 
                    class="bg-danger text-white btn" 
                    data-product-id=${id} data-bs-toggle="modal" 
                    data-bs-target="#confirm-delete"
                  > 
                    Delete
                  </button>
                </td>

              </tr>
            `;
        });
    return markup;
};
