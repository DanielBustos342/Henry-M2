const movieAPI = "https://students-api.up.railway.app/movies";
const cardRecomendations = require("./cardRecomendations.js");
const {
  renderCardCarousel,
  carrouselIndicators,
} = require("./cardCarrousel.js");

$.get(movieAPI, (data) => {
  cardRecomendations(data);
});

$.get(movieAPI, (data) => {
  renderCardCarousel(data);
  carrouselIndicators(data);
});
