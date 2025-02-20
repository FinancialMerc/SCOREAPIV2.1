const fs = require('fs');
const path = require('path');
const mensajesService = require('./mensajesAlerta')
const hawkService = require('./alertasHawk');
const ResumenCreditosService = require('./resumenCreditos'); 
const detalleCreditosService = require('./detalleCreditosService');
const puppeteer = require('puppeteer');
const detalleConsultasService = require('./detalleConsulta');

class HtmlService {
    async generarHtml(reporteData, filePath) {
    // const jsonFilePath = path.join(__dirname, '../Downloads/reporteData.json');
    // fs.writeFileSync(jsonFilePath, JSON.stringify(reporteData, null, 2), 'utf8');
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-ES');
    const horaFormateada = fecha.toLocaleTimeString('es-ES');
    const detalleCreditosHtml = detalleCreditosService.obtenerDetalleCreditos(reporteData.reporte.respuesta.persona.cuentas);
    const resumenHtml = ResumenCreditosService.generarHtmlResumen(reporteData.reporte.respuesta.persona.cuentas);
    const mensajesContent = mensajesService.generarMensajesAlerta(reporteData);
       
    const consultas = reporteData.reporte.respuesta.persona.consultaEfectuadas;
    const detalleConsultasHtml = detalleConsultasService.generarHtmlDetalleConsultas(consultas);
    const hawkContent = hawkService.generarMensajesHawk(reporteData);
    function formatDateString(dateString) {
        if (dateString) {
            const day = dateString.slice(0, 2);
            const monthNumber = dateString.slice(2, 4);
            const year = dateString.slice(4, 8);
            const monthNames = {
                '01': 'ENE',
                '02': 'FEB',
                '03': 'MAR',
                '04': 'ABR',
                '05': 'MAY',
                '06': 'JUN',
                '07': 'JUL',
                '08': 'AGO',
                '09': 'SEP',
                '10': 'OCT',
                '11': 'NOV',
                '12': 'DIC'
            };
    
            // Obtenemos el nombre del mes o un valor por defecto si el mes no es válido
            const month = monthNames[monthNumber] || 'MES';
    
            return `${day}-${month}-${year}`;
        } else {
            console.error('dateString no es válido:', dateString);
            // Manejo de error o valor por defecto
            return 'Fecha no válida';
        }
    }
    
    const fechaNacimiento = formatDateString(reporteData.reporte.respuesta.persona.nombre.fechaNacimiento);
    const fechaIngreso = formatDateString(reporteData.reporte.respuesta.persona.resumenReporte[0].fechaIngresoBD);


        // Leer archivo CSS
        const cssFilePath = path.join(__dirname, '../static/css/style.css');
        const cssContent = fs.readFileSync(cssFilePath, 'utf8');

        const imgPath = path.join(__dirname, '../static/img/score-1400.png');
        const imgBase64 = fs.readFileSync(imgPath, { encoding: 'base64' });
        const imgSrc = `data:image/png;base64,${imgBase64}`;

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
           <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${cssContent}</style> <!-- Insertar CSS en línea -->
            <title>Reporte de Crédito</title>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </head>
    <body>
   <table class="no-border" style="width: 100%;">
    <tr>
        <td style="width: 20%; vertical-align: top;">
            <img class="logo" style="max-width: 100px; height: auto; margin: 0;" src="${imgSrc}">
        </td>
        <td style="width: 60%; text-align: center; vertical-align: middle;">
            <h1 style="margin: 0; font-size: 18px;">Persona Física</h1>
            <h1 style="margin: 0; font-size: 18px;">Reporte de crédito</h1>
        </td>
            <td style="font-size: 8px">
                    <h4 align="right">NUMERO DE CONTROL: ${reporteData.reporte.respuesta.persona.encabezado.numeroControlConsulta}</h4>
                    <h4 align="right">FECHA DE CONSULTA: ${fechaFormateada}</h4>
                    <h4 align="right">HORA DE CONSULTA: ${horaFormateada}</h4>
                    <h4 align="right">MEMBER CODE: ${reporteData.reporte.respuesta.persona.encabezado.claveOtorgante}</h4>
            </td>
    </tr>
</table>

        <table class="striped">
            <tr>
                <th class="table-title" colspan="8">Datos Generales</th>
            </tr>
            <tr>
                <td class="blue-bg">NOMBRE(S)</td>
                <td class="blue-bg" colspan="2">APELLIDOS</td>
                <td class="blue-bg">RFC</td>
                <td class="blue-bg">FECHA DE NACIMIENTO</td>
                <td class="blue-bg">IFE</td>
                <td class="blue-bg">CURP</td>
                <td class="blue-bg">REGISTRO EN BC</td>
            </tr>
            <tr>
                <td colspan="1">
                    ${reporteData.reporte.respuesta.persona.nombre.primerNombre || ''} 
                    ${reporteData.reporte.respuesta.persona.nombre.segundoNombre || ''}
                </td>
                <td colspan="2">
                    ${reporteData.reporte.respuesta.persona.nombre.apellidoPaterno || ''} 
                    ${reporteData.reporte.respuesta.persona.nombre.apellidoMaterno || ''}
                </td>
                <td>${reporteData.reporte.respuesta.persona.nombre.rfc || ''}</td>
                <td>${fechaNacimiento || ''}</td>
                <td>${reporteData.reporte.respuesta.persona.nombre.numeroRegistroElectoral || ''}</td>
                <td>${reporteData.reporte.respuesta.persona.nombre.claveImpuestosOtroPais || ''}</td>
                <td>${fechaIngreso || ''}</td>
            </tr>

        </table>
        <table class="striped">
            <tr>
                <th class="table-title" colspan="10">DOMICILIO(S) REPORTADO(S)</th>
            </tr>
            <tr>
                <td class="center">NUM</td>
                <td class="center">CALLE Y NUMERO
                </td>
                <td class="center">COLONIA</td>
                <td class="center">DEL / MPIO</td>
                <td class="center">CIUDAD</td>
                <td class="center">EDO</td>
                <td class="center">CP</td>
                <td class="center">TEL</td>
                <td class="center">PAIS</td>
                <td class="center">REGISTRO EN BC
                </td>
            </tr>
            ${reporteData.reporte.respuesta.persona.domicilios.map((domicilio, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${domicilio.direccion1 || ''}</td>
                    <td>${domicilio.coloniaPoblacion || ''}</td>
                    <td>${domicilio.delegacionMunicipio || ''}</td>
                    <td>${domicilio.ciudad || ''}</td>
                    <td>${domicilio.estado || ''}</td>
                    <td>${domicilio.cp || ''}</td>
                    <td>${domicilio.numeroTelefono || ''}</td>
                    <td>${domicilio.codPais === 'MX' ? 'MÉXICO' : domicilio.codPais}</td>
                    <td>${domicilio.fechaReporteDireccion 
                        ? `${domicilio.fechaReporteDireccion.slice(0, 2)}-${domicilio.fechaReporteDireccion.slice(2, 4)}-${domicilio.fechaReporteDireccion.slice(4)}` 
                        : ''}</td>
                </tr>
                `).join('')}
        </table>

<table class="striped">
    <tr>
        <th class="table-title" colspan="16">DOMICILIO(S) DE EMPLEO(S) REPORTADO(S)</th>
    </tr>
    <tr>
        <td colspan="2">COMPAÑIA</td>
        <td>PUESTO</td>
        <td>SALARIO</td>
        <td>BASE</td>
        <td>CALLE Y NUM</td>
        <td>COLONIA</td>
        <td>DELEG / MPIO</td>
        <td>CIUDAD</td>
        <td>EDO</td>
        <td>CP</td>
        <td>TEL</td>
        <td>PAIS</td>
        <td>REGISTRO EN BC</td>
        <td>
            <p>FECHA DE CONTRATA- CION</p>
        </td>
        <td>ULTIMO DIA DE EMPLEO</td>
    </tr>
    ${reporteData.reporte.respuesta.persona.empleos && reporteData.reporte.respuesta.persona.empleos.length > 0
        ? reporteData.reporte.respuesta.persona.empleos.map((empleo, index) => `
            <tr>
                <td colspan="2">${empleo.nombreEmpresa || ''}</td>
                <td>${empleo.cargo || ''}</td>
                <td>${empleo.salario || ''}</td>
                <td>${empleo.baseSalarial || ''}</td>
                <td>${empleo.direccion1 || ''} ${empleo.direccion2 || ''}</td>
                <td>${empleo.coloniaPoblacion || ''}</td>
                <td>${empleo.delegacionMunicipio || ''}</td>
                <td>${empleo.ciudad || ''}</td>
                <td>${empleo.estado || ''}</td>
                <td>${empleo.cp || ''}</td>
                <td>${empleo.numeroTelefono || ''}</td>
                <td>${empleo.codPais === 'MX' ? 'MÉXICO' : empleo.codPais || ''}</td>
                <td>${empleo.fechaReportoEmpleo 
                    ? `${empleo.fechaReportoEmpleo.slice(0, 2)}-${empleo.fechaReportoEmpleo.slice(2, 4)}-${empleo.fechaReportoEmpleo.slice(4)}` 
                    : ''}</td>
                <td>${empleo.fechaContratacion 
                    ? `${empleo.fechaContratacion.slice(0, 2)}-${empleo.fechaContratacion.slice(2, 4)}-${empleo.fechaContratacion.slice(4)}` 
                    : ''}</td>
                <td>${empleo.fechaUltimoDiaEmpleo || ''}</td>
            </tr>
        `).join('')
        : `
            <tr>
                <td colspan="16" style="text-align: center;">NO EXISTEN REGISTROS DE EMPLEO</td>
            </tr>
        `}
</table>

            <table class="striped">
                <tr>
                    <th class="table-title" colspan="7">MENSAJES</th>
                </tr>
                <tr>
                    <td>NUM</td>
                    <td colspan="6">DESCRIPCIÓN</td>
                </tr>
                ${mensajesContent}
            </table>
           
             ${hawkContent}
       
       ${detalleCreditosHtml}

        ${resumenHtml}

       ${detalleConsultasHtml}

        <table class="striped">
            <tr>
                <th class="table-title" colspan="10">MENSAJE POR INFORMACION DE SERVIDOR PUBLICO SANCIONADO </th>
            </tr>
            <tr>
                <td>NUM</td>
                <td>FECHA REPORTE</td>
                <td>CLAVE</td>
                <td colspan="5">MENSAJE</td>
                <td colspan="2">COINCIDENCIA POR DATOS DE:</td>
            </tr>
            <tr>
                <td colspan="10">NO EXISTE INFORMACION REPORTADA</td>
            </tr>
        </table>

    </body>
</html>
        `;

        const browser = await puppeteer.launch({
            headless: true,
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        });

        const page = await browser.newPage();
        await page.setContent(htmlContent);

        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.emulateMediaType("screen");

        const pdfBuffer = await page.pdf({
            path: filePath,  // Usar `filePath` aquí
            format: 'A4',
            printBackground: true,
        });

        await browser.close();
        return pdfBuffer;
    }
}

module.exports = new HtmlService();