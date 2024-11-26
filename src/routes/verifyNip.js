const express = require('express');
const router = express.Router();
const { NipCode } = require('../utils/nipCode');

router.post('/verify-nip', async (req, res) => {
  const { email, code } = req.body;

  try {
    // Busca el registro del NIP que coincide
    const nipRecord = await NipCode.findFirst({
      where: { email, code, isVerified: false, expiresAt: { gt: new Date() } },
    });

    if (!nipRecord) {
      return res.status(400).json({ message: 'Código inválido o expirado' });
    }

    // Actualiza el registro a "verificado"
    const updatedNipRecord = await NipCode.update({
      where: { id: nipRecord.id },
      data: { isVerified: true },
    });

    // Responde con el mensaje y el código verificado
    res.json({
      message: 'NIP verificado correctamente',
      verifiedCode: updatedNipRecord.code, // Incluye el código verificado
    });
  } catch (error) {
    console.error('Error al verificar el NIP:', error);
    res.status(500).json({ message: 'Error en la verificación del NIP' });
  }
});

module.exports = router;
