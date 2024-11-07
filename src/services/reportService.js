// src/services/reportService.js
const axios = require('axios');
const tokenService = require('./tokenService');
const dataRequestCreditOffice = require('./dataRequestCreditOfficempl');

class ReporteService {
    async obtenerReporte({ userId, generalInformation, addressInformation }) {
        try {
            //console.log("userId recibido en ReporteService.obtenerReporte:", userId);

            // Obtener el token para Reporte utilizando el userId
            const tokenReporte = await tokenService.obtenerTokenConsulta(userId);
            //console.log("Token de Reporte:", tokenReporte);

            const headersReporte = {
                "Authorization": `Bearer ${tokenReporte}`,
                "Content-Type": "application/json"
            };

            // Mapear los datos de la consulta
            const consultaData = dataRequestCreditOffice.getDataForRequestToBuro({ generalInformation, addressInformation });

            // Hacer la solicitud a la API de reporte
            const responseReporte = await axios.post(
                `${process.env.CREDIT_OFFICE_URL}/pf/reporte-de-credito/credit-report-api/v1/reporte-de-credito`, 
                consultaData, 
                { headers: headersReporte }
            );
            
            if (responseReporte.status === 200) {
                console.log("Reporte obtenido:", responseReporte.data);
                return { reporte: responseReporte.data };
            } else {
                throw new Error("Error al obtener el Reporte");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            throw error;
        }
    }
}

module.exports = new ReporteService();
