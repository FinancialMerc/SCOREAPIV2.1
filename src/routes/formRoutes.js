const express = require('express');
const { links } = require('./generateLink'); // Importa el mapa de tokens generados
const router = express.Router();

// Ruta para manejar el formulario compartido
router.get('/teams/:teamSlug/buro/reportes/personas-fisicas-nip', (req, res) => {
    const { token } = req.query;
    const { teamSlug } = req.params;

    // Validar el token
    if (!token || !links.has(token)) {
        return res.status(401).json({ error: 'Link inválido o expirado' });
    }

    const linkData = links.get(token);
    const currentTime = new Date();

    if (linkData.expirationTime < currentTime || linkData.teamSlug !== teamSlug) {
        return res.status(401).json({ error: 'Link inválido o expirado' });
    }

    // El token es válido, permitir acceso
    res.redirect(`${process.env.FRONTEND_URL}/form-share-nip?token=${token}`);
});

module.exports = router;
