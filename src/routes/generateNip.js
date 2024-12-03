
const { sendNipEmail } = require('../helpers/mailer');
const express = require('express');
const router = express.Router();
//const { sendNipEmail } = require('../services/emailService');
const { generateRandomCode } = require('../utils/codeGenerator'); 
const NipCode = require('../models/nipCode');

router.post('/generate-nip', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Faltan campos requeridos (email o userId)' });
  }

  const code = generateRandomCode();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Expira en 10 minutos

  try {
    const newNip = await NipCode.create({
      email,
      code,
      expiresAt,
    });

    console.log(newNip); // Para verificar que se crea correctamente en la base de datos
    await sendNipEmail(email, code); // Enviar el código por correo

    res.json({ message: 'NIP enviado al correo' });
  } catch (error) {
    console.error('Error al generar y enviar el NIP:', error);
    res.status(500).json({ message: 'Error al generar el NIP' });
  }
});
module.exports = router;
