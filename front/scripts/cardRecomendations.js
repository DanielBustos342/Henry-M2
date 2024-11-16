function renderRecomendations(data) {
  const recomentationsContainer = document.querySelector(
    ".recomentations-container"
  );

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
}

module.exports = renderRecomendations;
