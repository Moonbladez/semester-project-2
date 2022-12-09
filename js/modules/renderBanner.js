export const renderBanner = (banner) => {
    const { hero_banner } = banner;
    let markup = `
    <div class="p-5 mb-4 bg-light rounded-3 jumbotron" style="background-image: url(${`http://localhost:1337${hero_banner.formats.large.url}`})">
      <div class="container-fluid py-5 jumbotron-container bg-dark">
        <h1 class="display-2 jumbotron--title text-white">Welcome to Pet Shop Buys!</h1>
      </div>
    </div>
    `;

    return markup;
};
