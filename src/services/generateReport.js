const HtmlService = require('./htmlService'); // Asegúrate de que la ruta sea correcta
const fs = require('fs');

// Leer el archivo JSON con los datos del reporte
const reporteData = JSON.parse(fs.readFileSync('./reporteData.json', 'utf8'));

// Ejecutar la función para generar el HTML y crear el PDF
async function main() {
    try {
        const pdfPath = await HtmlService.generarHtml(reporteData);
        //console.log(`PDF generado correctamente en: ${pdfPath}`);
    } catch (error) {
        console.error('Error al generar el PDF:', error);
    }
}

main();
