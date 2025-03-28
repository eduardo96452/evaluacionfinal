// src/routes/imagen.routes.js
const express = require('express');
const router = express.Router();
const {
  createImagen,
  getAllImagenes,
  getImagenById,
  updateImagen,
  deleteImagen
} = require('../controllers/imagen.controller');

// Crear
router.post('/', createImagen);
// Leer todas
router.get('/', getAllImagenes);
// Leer una por ID
router.get('/:id', getImagenById);
// Actualizar
router.put('/:id', updateImagen);
// Eliminar
router.delete('/:id', deleteImagen);

module.exports = router;
