const axios = require("axios");
const movieAPI = "https://students-api.up.railway.app/movies";
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

// $.get(movieAPI, (data) => {
//   cardRecomendations(data);
// });

// $.get(movieAPI, (data) => {
//   renderCardCarousel(data);
//   carrouselIndicators(data);
// });
