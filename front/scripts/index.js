const axios = require("axios");
const movieAPI = "http://localhost:3000/movies";
const cardRecomendations = require("./cardRecomendations.js");
const {
  renderCardCarousel,
  carrouselIndicators,
} = require("./cardCarrousel.js");
const { events } = require("../../back/src/models/Movie.js");

const fetchMoviesCarousel = async () => {
  try {
    const movieCarousel = await axios.get(movieAPI);
    const movie = movieCarousel.data;
    renderCardCarousel(movie);
    carrouselIndicators(movie);
  } catch (err) {
    console.log(err.massage);
  }
};

const fetchRecomendations = async () => {
  try {
    const movieCarousel = await axios.get(movieAPI);
    const movie = movieCarousel.data;
    cardRecomendations(movie);
  } catch (err) {
    console.log(err.massage);
  }
};

fetchMoviesCarousel();
fetchRecomendations();

const select = document.getElementById("genre-movie");
const listaGeneros = document.getElementById("array-genre");
let generosSeleccionados = [];

select.addEventListener("change", () => {
  const opcionSeleccionadas = Array.from(select.selectedOptions).map(
    (option) => option.value
  );

  opcionSeleccionadas.forEach((genero) => {
    if (!generosSeleccionados.includes(genero)) {
      generosSeleccionados.push(genero);
      // Ocultar la opción seleccionada del select
      const option = Array.from(select.options).find(
        (opt) => opt.value === genero
      );
      option.style.display = "none";
    }
  });

  listaGeneros.innerHTML = "";

  generosSeleccionados.forEach((genero) => {
    const li = document.createElement("li");
    li.textContent = genero;
    li.classList.add("select-option");
    listaGeneros.appendChild(li);

    // Añadir botón de eliminación individual
    const btndelete = document.createElement("button");
    btndelete.textContent = "X";
    btndelete.style.marginLeft = "10px";
    btndelete.classList.add("btn-delete-option");
    btndelete.addEventListener("click", () => {
      generosSeleccionados = generosSeleccionados.filter(
        (item) => item !== genero
      );
      const option = Array.from(select.options).find(
        (opt) => opt.value === genero
      );
      option.style.display = "block";

      li.remove();
      console.log("generos seleccionados", generosSeleccionados);
    });
    li.appendChild(btndelete);
    listaGeneros.appendChild(li);
  });
  console.log("Géneros seleccionados:", generosSeleccionados);
});

document.getElementById("home-btn").addEventListener("click", function () {
  showContent("home");
});
document.getElementById("add-movie-btn").addEventListener("click", function () {
  showContent("add-movie");
});
document.getElementById("games-btn").addEventListener("click", function () {
  showContent("games");
});
document.getElementById("news-btn").addEventListener("click", function () {
  showContent("news");
});
document.getElementById("search-btn").addEventListener("click", function () {
  showContent("search");
});
document.getElementById("favorites-btn").addEventListener("click", function () {
  showContent("favorites");
});
document.getElementById("profile-btn").addEventListener("click", function () {
  showContent("profile");
});

// Función que muestra el contenido y oculta las demás secciones
function showContent(section) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(function (sec) {
    sec.style.display = "none";
  });

  document.getElementById(section + "-content").style.display = "block";
}

//  ! Formulario
const form = document.getElementById("form-movie");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const movieData = {
    title: form.title.value,
    year: form.year.value,
    director: form.director.value,
    duration: form.duration.value,
    genre: generosSeleccionados,
    poster: form.poster.value,
  };
  try {
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Asegura el tipo de contenido correcto
      },
      body: JSON.stringify(movieData), // Convierte el objeto a JSON
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("Estado HTTP:", response.status);
      console.error("Detalles del error:", errorDetails);
      throw new Error(
        `Error en la solicitud: ${response.status} ${errorDetails}`
      );
    }

    const result = await response.json();
    console.log("Película creada:", result);
  } catch (error) {
    console.error("Error:", error);
  }
});
