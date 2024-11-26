const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

// Endpoint para validar un token
router.get('/validate-token/:token', async (req, res) => {
    const { token } = req.params;

    try {
        const formLink = await prisma.formLink.findUnique({
            where: { token },
        });

        if (!formLink) {
            return res.status(404).json({ error: 'Token no encontrado' });
        }

        if (formLink.isUsed || new Date() > new Date(formLink.expiresAt)) {
            return res.status(400).json({ error: 'Token expirado o ya utilizado' });
        }

        res.json({ message: 'Token válido', data: formLink });
    } catch (error) {
        console.error('Error al validar el token:', error);
        res.status(500).json({ error: 'Error al validar el token' });
    }
});

module.exports = router;
