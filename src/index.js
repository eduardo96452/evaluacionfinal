// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Rutas
const imagenRoutes = require('./routes/imagen.routes');
const clasificarRoutes = require('./routes/clasificar.routes');

// Crear app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/imagenes', imagenRoutes);
app.use('/api/clasificar', clasificarRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
