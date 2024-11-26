// src/routes/fileRoutes.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

router.get('/check-report-exists/:fileName', async (req, res) => {
    const { fileName } = req.params;
    const filePath = path.join(__dirname, '../Downloads', fileName);

    console.log(`Verificando la existencia del archivo en: ${filePath}`); // Log para depuración

    try {
        await fs.access(filePath);
        res.status(200).json({ exists: true });
    } catch (error) {
        console.log(`El archivo ${fileName} no fue encontrado.`);
        res.status(200).json({ exists: false });
    }
});

module.exports = router;
