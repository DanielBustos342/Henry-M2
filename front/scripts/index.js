const recomentationsContainer = document.querySelector(
  ".recomentations-container"
);

$.get("https://students-api.up.railway.app/movies", (data) => {
  const htmlRecomentations = data.map((movie) => {
    const {
      title = "Titulo no disponible",
      year = "Año desconocido",
      director = "Director desconocido",
      duration = "Duracion no especificada",
      genre = "Genero no especificado",
      rate = "Sin calificacion",
      poster = "../assets/image/error-portada.jpg",
    } = movie;
    return `
      <div class="recomentations">
      <img src="${poster}">
      <div class="recomentations-info">
      <h2>${title}</h2>
      <p>${rate}</p>
      <p>geneno: ${genre}</p>
      <p>duracion: ${duration}</p>
      <p>año: ${year}</p>
      <p>director: ${director}</p>
      </div>
      </div>
      `;
  });

  recomentationsContainer.innerHTML = htmlRecomentations;
});

const cardCarousel = document.getElementById("card-carousel");
console.log(cardCarousel);

$.get("https://students-api.up.railway.app/movies", (data) => {
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
  console.log(cardCarousel);
  cardCarousel.innerHTML = htmlCardCarousel;
});

const carrouselIndicators = document.getElementById("carousel-indicators");
$.get("https://students-api.up.railway.app/movies", (data) => {
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
  console.log(carrouselIndicators);
  carrouselIndicators.innerHTML = htmlCarouselIndicators;
});
