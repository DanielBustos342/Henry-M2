const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

//! middleware para el manejo de errores
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;
