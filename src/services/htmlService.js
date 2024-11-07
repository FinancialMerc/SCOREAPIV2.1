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
    //  const jsonFilePath = path.join(__dirname, '../Downloads/reporteData.json');
    // fs.writeFileSync(jsonFilePath, JSON.stringify(reporteData, null, 2), 'utf8');
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-ES');
    const horaFormateada = fecha.toLocaleTimeString('es-ES');
    const detalleCreditosHtml = detalleCreditosService.obtenerDetalleCreditos(reporteData.reporte.respuesta.persona.cuentas);
    const resumenHtml = ResumenCreditosService.generarHtmlResumen(reporteData.reporte.respuesta.persona.cuentas);
    const mensajesContent = mensajesService.generarMensajesAlerta(reporteData);
    let score = parseInt(reporteData.reporte.respuesta.persona.scoreBuroCredito[0].valorScore, 10);
    let icc = parseInt(reporteData.reporte.respuesta.persona.scoreBuroCredito[1].valorScore, 10);
    //let score = parseInt(reporteData.reporte.respuesta.persona.scoreBuroCredito[0].valorScore).toString();
    //let icc = parseInt(reporteData.reporte.respuesta.persona.scoreBuroCredito[1].valorScore).toString();
       
    const consultas = reporteData.reporte.respuesta.persona.consultaEfectuadas;
    const detalleConsultasHtml = detalleConsultasService.generarHtmlDetalleConsultas(consultas);
    //console.log('Resumen:', consultas);
    const cuentasCerradas = reporteData.reporte.respuesta.persona.cuentas;
    //const resumenCuentasCerradas = ResumenCreditosService.summaryClosedAccounts(cuentasCerradas);
    const persona = reporteData.reporte.respuesta.persona.nombre;
    //console.log(reporteData.reporte.respuesta.persona.resumenReporte.fechaIngresoBD)
    const hawkContent = hawkService.generarMensajesHawk(reporteData);
    const codigoRazon = reporteData.reporte.respuesta.persona.scoreBuroCredito[0].codigoRazon;
    console.log (typeof (score));
    console.log(score, "score");
    //console.log(reporteData.reporte.respuesta.persona.scoreBuroCredito);
    //console.log(codigoRazon, "codigo");
    //console.log('Reporte obtenido:', JSON.stringify(reporteData, null, 2));
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
                <th class="table-title" colspan="16">DOMICILIO(S) DE EMPLEO(S)
                    REPORTADO(S)
                </th>
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
            ${reporteData.reporte.respuesta.persona.empleos.map((empleo, index) => `
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
                `).join('')}
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
        
        <style>
        .chart-container {
            width: 300px;
            height: 150px;
            margin: 0 auto;
            position: relative;
        }
        .icc-container {
            width: 300px;
            height: 150px;
            position: relative;
        }
        .icc-label {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 25px;
            font-weight: bold;
            color: black;
        }
        .score-label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            font-weight: bold;
        }
        .min-max-labels {
            position: absolute;
            width: 100%;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            box-sizing: border-box;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .score-info {
            margin: 20px 0;
        }
        .score-value {
            font-size: 24px;
            font-weight: bold;
        }
        .charts-row {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }
    </style>
<h4>Gráficas de Score e ICC</h4>
    <table>
        <tr class="indicators">
            <td class="indicators">
                <div id="chartICC" class="chart-container icc-container">
                    <canvas id="chart_icc"></canvas>
                    <div class="icc-label">ICC</div>
                </div>
            </td>
            <td class="indicators">
                <div id="chartScore" class="chart-container">
                    <canvas id="chart_score"></canvas>
                    <div class="score-label">Score: ${score}</div>
                    <div class="min-max-labels">
                        <span>0</span>
                        <span>750</span>
                    </div>
                </div>
            </td>
        </tr>
    </table>
    <h3>Razones del Score:</h3>
    <table class="striped" id="reasonsTable">
        <thead>
            <tr>
                <th class="table-title">Código</th>
                <th class="table-title">Descripción</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <script>
    const CODIGOS_RAZON = {
    '01': 'Nivel de endeudamiento',
    '02': 'Nivel de endeudamiento en cuentas',
    '03': 'Nivel de endeudamiento en cuentas revolventes',
    '04': 'Consulta reciente',
    '05': 'Pago vencido reciente',
    '07': 'Cuentas abiertas con morosidad',
    '08': 'Aumento en cuentas con endeudamiento',
    '09': 'Bajo promedio de antigüedad en créditos abiertos',
    '10': 'Bajo promedio de antigüedad en créditos abiertos',
    '11': 'Bajo promedio de antigüedad en créditos minoristas',
    '12': 'Tipo de crédito con mayor riesgo',
    '13': 'Número de cuentas abiertas',
    '14': 'Relación entre créditos revolventes y no revolventes',
    '15': 'Utilización significativa de límites de crédito revolventes',
    '16': 'Tiempo desde última cuenta aperturada',
    '17': 'Meses desde último atraso',
    '18': 'Duración de cuenta abierta más antigua',
    '19': 'Duración de cuenta revolvente abierta más antigua',
    '20': 'Relación entre cuentas con morosidad y sin morosidad',
    '21': 'Atrasos frecuentes o recientes',
    '22': 'Aumento en consultas',
    '23': 'Aumento en consultas en los últimos 48 meses',
    '24': 'Créditos con morosidad importante',
    '27': 'Varios créditos cerrados',
    '28': 'Proporción alta de saldos contra crédito máximo',
    '29': 'Proporción de cuentas nuevas en los últimos 24 meses',
    '31': 'Atrasos frecuentes o recientes',
    '32': 'Relación entre experiencias con y sin morosidad',
    '33': 'Tipo de crédito con mayor riesgo',
    '34': 'Cuentas con morosidad reciente',
    '51': 'Pago adecuado del crédito',
    '52': 'Pago adecuado del crédito',
    '53': 'Pagos adecuados de los créditos',
    '54': 'Pagos adecuados de los créditos',
    '55': 'Créditos con morosidad',
    '56': 'Créditos nuevos con morosidad',
    '57': 'Créditos con historial de morosidad',
    '58': 'Créditos con atrasos',
    '59': 'Créditos con atrasos',
    '60': 'Créditos con atrasos mayores a 90 días',
    '61': 'Créditos con atrasos'
};

const CODIGOS_ESPECIALES = {
    '-01': 'Consumidor Fallecido',
    '-05': 'Expediente con todas las cuentas cerradas y por lo menos con una en atraso mayor o igual a 90 días',
    '-06': 'Expediente con todas sus cuentas con antigüedad menor a 6 meses y al menos una tiene MOP ≥ 03',
    '-07': 'Expediente con todas sus cuentas con antigüedad menor a 6 meses y al menos una tiene MOP ≥ 02',
    '-08': 'Expediente no tiene al menos una cuenta actualizada en el último año o con antigüedad mínima de 6 meses, y/o con cuentas que no se incluyen en el cálculo del BC-Score',
    '-09': 'Expediente sin cuentas para cálculo de BC-Score'
};


                const razonesData = ${JSON.stringify(codigoRazon)};

//  // Función para crear la tabla de razones del score
//                 function generarTablaRazon(codigoRazon) {
//                     const tbody = document.querySelector('#reasonsTable tbody');
//                     codigoRazon.forEach(codigo => {
//                         const tr = document.createElement('tr');
//                         tr.innerHTML = \`
//                             <td>\${codigo}</td>
//                             <td>\${CODIGOS_RAZON[codigo] || 'Código no encontrado'}</td>
//                         \`;
//                         tbody.appendChild(tr);
//                     });
//                 }



function generarTablaRazon(codigoRazon, score) {
    const tbody = document.querySelector('#reasonsTable tbody');

    // Limpiar el contenido actual de la tabla
    tbody.innerHTML = '';
    // Si codigoRazon es undefined o vacío, buscar en los códigos especiales basados en el score
    if (!codigoRazon || codigoRazon.length === 0) {
        // Convertir el score a una cadena con el formato adecuado para buscar en CODIGOS_ESPECIALES
        //const codigoEspecial = score < 0 ? score.toString().padStart(4, '0') : null;
       let codigoEspecial;
        
        if (${score} == '-8') {
            codigoEspecial = '-08';
        } else if (${score} == '-1') {
            codigoEspecial = '-01';
        } else if (${score} == '-5') {
            codigoEspecial = '-05';
        } else if (${score} == '-6') {
            codigoEspecial = '-06';
        } else if (${score} == '-7') {
            codigoEspecial = '-07';
        } else if (${score} == '-9') {
            codigoEspecial = '-09';
        } else {
            // Si no se encuentra un valor específico, mostrar un mensaje de que no se encontró
            codigoEspecial = null;
        }

        if (codigoEspecial && CODIGOS_ESPECIALES[codigoEspecial]) {
            // Si se encuentra un código especial para el score negativo, mostrarlo en la tabla
            const tr = document.createElement('tr');
            tr.innerHTML = \`
                <td>\${codigoEspecial}</td>
                <td>\${CODIGOS_ESPECIALES[codigoEspecial]}</td>
            \`;
            tbody.appendChild(tr);
        } else {
            // Si no hay un código especial correspondiente, mostrar un mensaje indicando que no se encontró
            const tr = document.createElement('tr');
            tr.innerHTML = \`
                <td>Sin código</td>
                <td>No se encontró un código especial para este score</td>
            \`;
            tbody.appendChild(tr);
        }
    } else {
        // Mostrar la tabla con los códigos proporcionados en codigoRazon
        codigoRazon.forEach(codigo => {
            const tr = document.createElement('tr');
            tr.innerHTML = \`
                <td>\${codigo}</td>
                <td>\${CODIGOS_RAZON[codigo] || 'Código no encontrado'}</td>
            \`;
            tbody.appendChild(tr);
        });
    }
}

                // Función para crear la gráfica de Score
                function createScoreGraph(score) {
                    const ctxScore = document.getElementById('chart_score').getContext('2d');
                    const color = score < 540 ? "#F21111" : (score < 650 ? "#DFEF3B" : "#1BCB16");
                    new Chart(ctxScore, {
                        type: 'doughnut',
                        data: {
                            datasets: [{
                                data: [score, 750 - score],
                                backgroundColor: [color, '#E0E0E0']
                            }]
                        },
                        options: {
                            circumference: 180,
                            rotation: 270,
                            cutout: '80%',
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                },
                                tooltip: {
                                    enabled: false
                                }
                            }
                        }
                    });
                }

                // Función para crear la gráfica de ICC
                function createIccGraph(icc) {
                    const ctxIcc = document.getElementById('chart_icc').getContext('2d');
                    const color = icc <= 3 ? "#F21111" : (icc < 7 ? "#DFEF3B" : "#1BCB16");
                    new Chart(ctxIcc, {
                        type: 'bar',
                        data: {
                            labels: ['ICC'],
                            datasets: [{
                                data: [icc],
                                backgroundColor: [color],
                                barThickness: 90
                            }]
                        },
                        options: {
                            indexAxis: 'y',
                            scales: {
                                x: {
                                    min: 0,
                                    max: 9,
                                    ticks: {
                                        stepSize: 1
                                    }
                                },
                                y: {
                                   ticks: {
                                display: false
                            }
                                }
                            },
                            plugins: {
                                legend: {
                                    display: false
                                },
                                tooltip: {
                                    enabled: false
                                }
                            },
                            responsive: true,
                            maintainAspectRatio: false,
                             layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 10,
                            bottom: 10
                        }
                    }
                        }
                    });
                }

                // Crear las gráficas y la tabla de razones
                generarTablaRazon(razonesData);
                createScoreGraph(${score});
                createIccGraph(${icc});
            </script>
       
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