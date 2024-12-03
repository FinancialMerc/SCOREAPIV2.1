const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

// Endpoint para generar un link con expiración y slug del equipo
router.post('/generate-link', async (req, res) => {
    const { expirationMinutes, teamSlug } = req.body;

    if (!expirationMinutes || isNaN(expirationMinutes)) {
        return res.status(400).json({ error: 'Tiempo de expiración inválido' });
    }

    if (!teamSlug) {
        return res.status(400).json({ error: 'Falta el slug del equipo' });
    }

    try {
        const token = uuidv4();
        const expirationTime = new Date(Date.now() + expirationMinutes * 60 * 1000);

        // Almacenar el token en la base de datos
        const formLink = await prisma.formLink.create({
            data: {
                token,
                expiresAt: expirationTime,
                data: { teamSlug }, // Puedes almacenar más datos relacionados si es necesario
            },
        });

        res.json({
            link: `${process.env.FRONTEND_URL || 'https://financialmerc.scorecapital.com.mx'}/teams/${teamSlug}/buro/reportes/form-share-nip?token=${token}`,
            expiresAt: expirationTime,
            formLink,
        });
    } catch (error) {
        console.error('Error al generar el enlace:', error);
        res.status(500).json({ error: 'Error al generar el enlace' });
    }
});

module.exports = router;
