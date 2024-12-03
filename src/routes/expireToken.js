const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

// Endpoint para expirar un token
router.post('/expire-token/:token', async (req, res) => {
    const { token } = req.params;

    try {
        // Buscar el token en la base de datos
        const formLink = await prisma.formLink.findUnique({
            where: { token },
        });

        if (!formLink) {
            return res.status(404).json({ error: 'Token no encontrado' });
        }

        // Verificar si ya está expirado o utilizado
        if (formLink.isUsed) {
            return res.status(400).json({ error: 'El token ya está expirado o utilizado' });
        }

        // Actualizar el token para marcarlo como expirado
        await prisma.formLink.update({
            where: { token },
            data: {
                isUsed: true, // Marca el token como utilizado
            },
        });

        res.json({ message: 'Token expirado correctamente' });
    } catch (error) {
        console.error('Error al expirar el token:', error);
        res.status(500).json({ error: 'Error al expirar el token' });
    }
});

module.exports = router;
