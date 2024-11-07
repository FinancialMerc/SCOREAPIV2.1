// src/routes/getToken.js
const express = require('express');
const router = express.Router();
const tokenService = require('../services/tokenService');

router.post('/getToken', async (req, res) => {
  const { userId } = req.body;
  console.log("userId recibido en /getToken:", userId);

  if (!userId) {
    return res.status(400).json({ error: "Falta el userId" });
  }

  try {
    const token = await tokenService.obtenerTokenConsulta(userId);
    console.log("Token generado en /getToken:", token);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
