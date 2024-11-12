const recomentationsContainer = document.querySelector(
  ".recomentations-container"
);

const htmlRecomentations = tempData.map((movie) => {
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
    <h2>${title}</h2>
    <p>${rate}</p>
    <p>genre: ${genre}</p>
    <p>duration: ${duration}</p>
    <p>año: ${year}</p>
    <p>director: ${director}</p>
    </div>
    `;
});

recomentationsContainer.innerHTML = htmlRecomentations;
