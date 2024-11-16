function renderCardCarousel(data) {
  const cardCarousel = document.getElementById("card-carousel");

  const htmlCardCarousel = data
    .map((movie, index) => {
      const { title, genre, poster } = movie;
      return `
         <div class="carousel-item ${
           index === 0 ? "active" : ""
         }" style="background: linear-gradient(270deg, #FFF,10%, #000">
            <div class="d-flex flex-row-reverse ">
              <div class="carousel-caption" style="width: 40%; height: calc(100vh - 60px); display: flex; flex-direction: column; justify-content: center; align-items: start">
                <h5>${title}</h5>
                <p>${genre}</p>
                <button class="btn-crunchy">Ver mas</button>
              </div>
              <div>
                <img src="${poster}" class="d-block w-100 object-fit-contain" alt="..." style="height: calc(100vh - 60px);">
              </div>
            </div>
         </div>
         `;
    })
    .join("");
  cardCarousel.innerHTML = htmlCardCarousel;
}
function carrouselIndicators(data) {
  const carrouselIndicators = document.getElementById("carousel-indicators");
  const htmlCarouselIndicators = data
    .map((_, index) => {
      return `
        <button 
        type="button" 
        data-bs-target="#carouselExampleCaptions" 
        data-bs-slide-to="${index}" 
        aria-label="Slide ${index + 1}"
        class="active border rounded-3"
        ></button>`;
    })
    .join("");
  carrouselIndicators.innerHTML = htmlCarouselIndicators;
}

module.exports = { renderCardCarousel, carrouselIndicators };
