const axios = require("axios");
const movieAPI = "http://localhost:3000/movies";
const cardRecomendations = require("./cardRecomendations.js");
const {
  renderCardCarousel,
  carrouselIndicators,
} = require("./cardCarrousel.js");

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

const select = document.getElementById("generos");
const listaGeneros = document.getElementById("lista-generos");
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

// const showFormBtn = document.getElementById("show-form-btn");
// const formLi = document.getElementById("form-li");

// showFormBtn.addEventListener("click", (event) => {
//   event.preventDefault(); // Prevenir que el enlace navegue a otra página

//   // Toggle visibility of the form
//   if (formLi.style.display === "none" || formLi.style.display === "") {
//     formLi.style.display = "block"; // Mostrar el formulario
//   } else {
//     formLi.style.display = "none"; // Ocultar el formulario
//   }
// });

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
