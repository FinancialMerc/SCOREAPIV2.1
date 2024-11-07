// src/routes/authRoutes.js
const express = require('express');
const ReportService = require('../services/reportService');
const HtmlService = require('../services/htmlService');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

router.post('/obtenerReporte', async (req, res, next) => {
    try {
        const { userId, generalInformation, addressInformation } = req.body;

        // Validación de los datos requeridos
        if (!userId || !generalInformation || !addressInformation) {
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }
        console.log('Datos recibidos en obtenerReporte:', req.body);

        // Llamada a ReportService para obtener los datos del reporte
        const reporte = await ReportService.obtenerReporte({ userId, generalInformation, addressInformation });
        console.log("Reporte obtenido:", reporte);

        // Generación de un nombre de archivo único con userId y timestamp
        const timestamp = Date.now();
        const pdfFileName = `reporte_${userId}_${timestamp}.pdf`;
        const pdfFilePath = path.join(__dirname, '../Downloads', pdfFileName);

        // Generación del PDF a partir del reporte
        await HtmlService.generarHtml(reporte, pdfFilePath);

        // Verificamos que el archivo haya sido creado correctamente
        await fs.access(pdfFilePath);
        
        // Enviamos la respuesta con el nombre del archivo generado para que el frontend pueda descargarlo
        res.status(200).json({ message: 'Reporte generado con éxito', fileName: pdfFileName });

    } catch (error) {
        console.error("Error al obtener el reporte:", error);
        next(error);
    }
});

module.exports = router;
