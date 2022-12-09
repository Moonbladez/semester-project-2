export const renderProductForm = (action, product) => {
    const isEdit = product;

    return `
      <h2 class="mb-4 text-capitalize">${action} Product</h2>
      <form>
          <div class="form-group mb-3">
            <label for="add-product-image">Image</label>
            <input type="text" id="add-product-image" class="form-control" value="${
                isEdit ? product.image_url : ""
            }" required> 
          </div>
          <div class="form-group mb-3">
              <label for="add-product-name">Title</label>
              <input type="text" id="add-product-name" class="form-control" value="${
                  isEdit ? product.title : ""
              }" required/>
          </div>
          <div class="form-group mb-3">
              <label for="add-product-description">Description</label>
              <textarea id="add-product-description" class="form-control" rows="4" required>${
                  isEdit ? product.description : ""
              }</textarea>
          </div>
          <div class="form-group mb-3">
            <label for="add-product-price">Price</label>
            <input type="number" id="add-product-price" class="form-control" value="${
                isEdit ? product.price : ""
            }" required/>
          </div>
          <div class="form-check mb-3">
              <input type="checkbox" id="add-product-featured" class="form-check-input" ${
                  isEdit && product.featured ? "checked" : ""
              }/>
              <label class="form-check-label" for="add-product-featured">Featured</label>
          </div>
          <button type="button" id="${action}-product-submit" class="btn btn-success btn-lg" data-product-id="${
        isEdit ? product.id : ""
    }">Submit</button>
          <button type="button" id="cancel-product-submit" class="btn btn-outline-secondary btn-lg">Cancel</button>
      </form>
  `;
};
