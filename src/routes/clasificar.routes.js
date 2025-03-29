// src/routes/clasificar.routes.js (Ejemplo)
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Suponiendo que tu Lambda esté expuesta vía API Gateway en la URL:
// https://xxxxx.execute-api.us-east-1.amazonaws.com/prod/clasificar
const LAMBDA_ENDPOINT = process.env.LAMBDA_ENDPOINT || 'https://...';

router.post('/', async (req, res) => {
  try {
    const { image, fileName } = req.body;

    // Enviar a la Lambda
    const lambdaResponse = await axios.post(LAMBDA_ENDPOINT, {
      image,
      fileName
    });

    // La Lambda debe responder con { classification: { typeDetected, description }, backendResponse...}
    // o algo similar, según tu implementación
    const data = lambdaResponse.data;

    return res.status(200).json({
      message: 'Clasificación realizada con éxito',
      ...data
    });

  } catch (error) {
    console.error(error);
    const errMessage = error.response?.data || error.message;
    return res.status(500).json({
      message: 'Error al clasificar la imagen',
      error: errMessage
    });
  }
});

module.exports = router;
