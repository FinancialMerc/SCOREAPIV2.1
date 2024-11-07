class HawkService {
    generarMensajesHawk(reporteData) {
        let hawkContent = '';
        let juiciosContent = '';
        let pepContent = '';
        let tabla680Content = '';
        let buroEmpresarialContent = '';

        // Obtener el campo hawkAlertBD del reporteData
        const hawkAlertBD = reporteData.reporte.respuesta.persona.hawkAlertBD;
        const hawkAlertaMen = reporteData.reporte.respuesta.persona.hawkAlertConsulta;
        //console.log(hawkAlertaMen, "Alertasmensajes");
        //console.log(hawkAlertBD, "Alertasmensajes");

        // Claves a verificar
        const clavesJuicios = ['990', '991', '960', '961'];
        const clavePEP = '670';
        const clave680 = '680';
        const clavesBuroEmpresarial = ['980', '981'];

        // Verificar si hawkAlertBD es un array
        if (Array.isArray(hawkAlertBD) && hawkAlertBD.length > 0) {
            hawkAlertBD.forEach((hawk, index) => {
                const clave = hawk.codigoClave;
                const Institucion = hawk.tipoInstitucion;
                const fecha = hawk.fechaReporte 
                
                    ? `${hawk.fechaReporte.slice(0, 2)}-${hawk.fechaReporte.slice(2, 4)}-${hawk.fechaReporte.slice(4)}`
                    : 'Sin fecha';
                    const [tipoJuzgadoCodigo, tipoJuicioCodigo, estadoProcesalCodigo, dia, mes, numeroExpediente, anio, estado, ciudad, juzgado] = hawk.mensaje.split(/[-\s]+/);

                    // Obtener la descripción de tipo de juzgado, tipo de juicio y estado procesal
                    const tipoJuzgado = {
                        "02": "Paz",
                        "04": "Civil",
                        "07": "Familiar",
                        "12": "Mixto",
                        "16": "Arrendamiento",
                        "17": "Municipal Civil",
                        "18": "Menor Civil / Menor Cuantía",
                        "19": "Menor Mixto",
                        "20": "Mixto de Paz",
                        "21": "Letrado Civil",
                        "22": "Jurisdicción Concurrente",
                        "23": "Tribunal Regional",
                        "24": "Mercantil",
                        "26": "Penal",
                        "31": "Auxiliar",
                        "33": "Junta Especial",
                        "34": "Secretaria Auxiliar de Huelgas",
                        "35": "Secretaria Auxiliar de Conflictos Colectivos",
                        "36": "Secretaria Auxiliar de Amparos",
                        "37": "Secretaria Auxiliar de Registro y Actualización Sindical",
                        "41": "Sala Civil",
                        "42": "Sala Familiar",
                        "45": "Sala Colegiada",
                        "46": "Civil Oral",
                        "47": "Familiar Oral",
                        "48": "Mixto Oral",
                        "50": "Amparo",
                        "52": "Sala Mixta",
                        "57": "Sala Colegiada Mixta",
                        "78": "Sala Auxiliar",
                        "84": "Sala Mercantil",
                        "85": "Sala Unitaria",
                        "86": "Sala Civil Regional"
                    }[tipoJuzgadoCodigo] || "No disponible";
                
                    const tipoJuicio = {
                        "ARR": "Arrendamiento Inmobiliario",
                        "CON": "Concurso / Quiebra",
                        "DES": "Desahucio",
                        "EJE": "Ejecutivo",
                        "EJM": "Ejecutivo Mercantil",
                        "ESH": "Especial Hipotecario",
                        "HIP": "Hipotecario",
                        "HCI": "Hipotecario Civil",
                        "MER": "Mercantil",
                        "ORH": "Oral Hipotecario",
                        "OME": "Oral Mercantil",
                        "ORM": "Ordinario Mercantil",
                        "SUH": "Sumario Hipotecario",
                        "ACJ": "Acción de Jactancia",
                        "ALI": "Alimentos",
                        "AMP": "Amparo",
                        "CFA": "Controversia Familiar",
                        "CIV": "Civil",
                        "CPA": "Cancelación de Pensión Alimenticia",
                        "DIC": "Divorcio Contencioso",
                        "DIN": "Divorcio Necesario",
                        "DYP": "Daños y Perjuicios",
                        "EJC": "Ejecutivo Civil",
                        "FAM": "Familiar",
                        "FAO": "Familiar Oral",
                        "INM": "Inmatriculación",
                        "INT": "Interdicto",
                        "JAM": "Juicio de Amparo",
                        "JUN": "Juicio de Nulidad",
                        "JUV": "Jurisdicción Voluntaria",
                        "LAB": "Laboral",
                        "NOP": "No Publicado",
                        "NUL": "Nulidad",
                        "OCI": "Oral Civil",
                        "ORA": "Oral",
                        "ORC": "Ordinario Civil",
                        "ORD": "Ordinario",
                        "OTO": "Otro",
                        "PAD": "Prescripción Adquisitiva",
                        "PAZ": "Paz",
                        "PNL": "Penal",
                        "PRD": "Prendario",
                        "PRP": "Prescripción Positiva",
                        "PSP": "Pago pesos",
                        "REI": "Reivindicatorio",
                        "RES": "Rescisión",
                        "RPA": "Reducción Pensión Alimenticia",
                        "SCI": "Sumario Civil",
                        "SMC": "Sumarisimo Civil",
                        "SUE": "Sumario Especial",
                        "SUM": "Sumario",
                        "USU": "Usucapión"
                    }[tipoJuicioCodigo] || "No disponible";
                
                    const estadoProcesal = {
                        "AAC": "Acta Aceptación Cargo",
                        "AAU": "Acta Audiencia",
                        "ABS": "Absolución",
                        "ACA": "Amparo Contra Recurso",
                        "ACD": "Acuerdo",
                        "ACP": "Acuerdo Cuaderno Amparo",
                        "ACQ": "Acuerdo Cuaderno Queja",
                        "ACS": "Acuerdo Cuaderno Agravios",
                        "ACU": "Acumular",
                        "ADJ": "Adjudica",
                        "ADM": "Admitir",
                        "AGD": "Agrega Depósito",
                        "AGV": "Agravios",
                        "ALE": "Alegato",
                        "ALG": "Apertura de Alegatos",
                        "ALL": "Allanamiento",
                        "AOF": "Agrega Oficio",
                        "APB": "Apertura a Prueba",
                        "APC": "Acuerdo Cuaderno Apelación",
                        "APE": "Apelación",
                        "APR": "Apertura",
                        "APS": "Auto para Sentencia",
                        "ARC": "Archivado",
                        "ARO": "Amparo",
                        "ART": "Acta Remate",
                        "AUD": "Audiencia",
                        "AUO": "Avalúo",
                        "CAD": "Caducidad"
                    }[estadoProcesalCodigo] || "No disponible";
                    
                    const meses = [
                        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
                    ];
                    const mesAbreviado = meses[parseInt(mes, 10) - 1] || 'N/A';

                    const ultimoEstadoProcesal = `${estadoProcesal} -${mesAbreviado} - ${dia}`;
                
                    // Formatear el expediente
                    const numeroExpedienteFormateado = `${numeroExpediente}/${anio}`;
                
                    // Formatear el juzgado completo
                    const juzgadoCompleto = `${estado}-${ciudad} ${juzgado}`;
                if (clavesJuicios.includes(clave)) {
                    // Si el código clave está en la lista de claves de juicios
                    juiciosContent += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${fecha}</td>
                            <td>${clave || 'No disponible'}</td>
                             <td>${tipoJuzgado}</td>
                            <td>${numeroExpedienteFormateado}</td>
                            <td>${tipoJuicio}</td>
                            <td>${ultimoEstadoProcesal}</td>
                            <td>${juzgadoCompleto}</td>
                        </tr>
                    `;
                } else if (clave === clavePEP) {
                    // Si el código clave es 670 (PEP)
                    pepContent += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${fecha}</td>
                            <td>${clave || 'No disponible'}</td>
                            <td colspan="9">${hawk.mensaje || 'Sin mensaje'}</td>
                        </tr>
                    `;
                } else if (clave === clave680) {
                    // Si el código clave es 680 (otra tabla)
                    tabla680Content += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${fecha}</td>
                            <td>${clave || 'No disponible'}</td>
                            <td colspan="9">${hawk.mensaje || 'Sin mensaje'}</td>
                        </tr>
                    `;
                } else if (clavesBuroEmpresarial.includes(clave)) {
                    // Si el código clave es 980 o 981 (Buro de Créditos Empresariales)
                    buroEmpresarialContent += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${fecha}</td>
                            <td>${clave || 'No disponible'}</td>
                            <td>Responsabilidad</td>
                            <td>${Institucion}</td>
                            <td colspan="5">${hawk.mensaje || 'Sin mensaje'}</td>
                            <td colspan="2">REP. CREDITO</td>
                        </tr>
                    `;
                } else {
                    // Si no está en la lista de clavesJuicios, PEP, clave680, o Buro Empresarial
                    hawkContent += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${fecha}</td>
                            <td>${clave || 'No disponible'}</td>
                            <td colspan="5">${hawk.mensaje || 'Sin mensaje'}</td>
                            <td colspan="2">COINCIDENCIA POR DATOS DE: REP. CREDITO</td>
                        </tr>
                    `;
                }
            });

            // Si no hay datos de juicios, mostrar tabla con mensaje de "NO EXISTE INFORMACION REPORTADA"
            if (!juiciosContent) {
                juiciosContent = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE POR INFORMACION DE JUICIOS (NOMBRE DEL CONSULTADO ASOCIADO A UN JUICIO COMO DEMANDADO)</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td colspan="9">MENSAJE</td>
                        </tr>
                        <tr>
                            <td colspan="12">NO EXISTE INFORMACION REPORTADA</td>
                        </tr>
                    </table>            
                `;
            } else {
                juiciosContent = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE POR INFORMACION DE JUICIOS (NOMBRE DEL CONSULTADO ASOCIADO A UN JUICIO COMO DEMANDADO)</th>
                        </tr>
                   <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td>TIPO DE JUZGADO</td>
                            <td>EXPEDIENTE</td>
                            <td>TIPO DE JUICIO</td>
                            <td>ULTIMO ESTADO PROCESAL</td>
                            <td>JUZGADO</td>
                        </tr>
                        ${juiciosContent}
                    </table>
                `;
            }

            // Si no hay datos de PEP, mostrar tabla con mensaje de "NO EXISTE INFORMACION REPORTADA"
            if (!pepContent) {
                pepContent = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="13">MENSAJE POR PERSONA EXPUESTA POLÍTICAMENTE (PEP)</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td colspan="5">DESCRIPCION</td>
                            <td colspan="2">RESPONSABILIDAD</td>
                            <td>REPORTADO POR</td>
                            <td>MENSAJE</td>
                            <td>COINCIDENCIA POR DATOS DE</td>
                        </tr>
                        <tr>
                            <td colspan="13">NO EXISTE INFORMACION REPORTADA</td>
                        </tr>
                    </table>
                `;
            } else {
                pepContent = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE POR PERSONA EXPUESTA POLITICAMENTE (PEP)</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td colspan="9">MENSAJE</td>
                        </tr>
                        ${pepContent}
                    </table>
                `;
            }

            // Si no hay datos de clave 680, mostrar tabla con mensaje de "NO EXISTE INFORMACION REPORTADA"
            if (!tabla680Content) {
                tabla680Content = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">INFORMACIÓN PARA PREVENCIÓN DE LAVADO DE DINERO (PLD)</th>
                        </tr>
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE POR INFORMACIÓN REPORTADA POR OFAC - OFICINA DE CONTROL DE ACTIVOS DE EXTRANJEROS DEL DEPARTAMENTO DEL TESORO DE EEUU.</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA DE PUBLICACION</td>
                            <td>CLAVE</td>
                            <td colspan="5">RESPONSABILIDAD</td>
                            <td colspan="2">REPORTADO POR</td>
                            <td>MENSAJE</td>
                            <td>COINCIDENCIA POR DATOS DE</td>
                        </tr>
                        <tr>
                            <td colspan="12">NO EXISTE INFORMACION REPORTADA</td>
                        </tr>
                    </table>
                `;
            } else {
                tabla680Content = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE DE CLAVE 680</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td colspan="9">MENSAJE</td>
                        </tr>
                        ${tabla680Content}
                    </table>
                `;
            }

            // Si no hay datos de Buro Empresarial, mostrar tabla con mensaje de "NO EXISTE INFORMACION REPORTADA"
            if (!buroEmpresarialContent) {
                buroEmpresarialContent = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE POR INFORMACION REPORTADA EN BURO DE CREDITOS EMPRESARIALES</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td>RESPONSABILIDAD</td>
                            <td>REPORTADO POR</td>
                            <td colspan="5">MENSAJE</td>
                            <td colspan="2">COINCIDENCIA POR DATOS DE</td>
                        </tr>
                        <tr>
                            <td colspan="12">NO EXISTE INFORMACION REPORTADA</td>
                        </tr>
                    </table>
                `;
            } else {
                buroEmpresarialContent = `
                    <table class="striped">
                        <tr>
                            <th class="table-title" colspan="12">MENSAJE POR INFORMACION REPORTADA EN BURO DE CREDITOS EMPRESARIALES</th>
                        </tr>
                        <tr>
                            <td>NUM</td>
                            <td>FECHA REPORTE</td>
                            <td>CLAVE</td>
                            <td>RESPONSABILIDAD</td>
                            <td>REPORTADO POR</td>
                            <td colspan="5">MENSAJE</td>
                            <td colspan="2">COINCIDENCIA POR DATOS DE</td>
                        </tr>
                        ${buroEmpresarialContent}
                    </table>
                `;
            }
        } else {
            // Mostrar mensaje si no existe información en general
            hawkContent = `
                <tr>
                    <td colspan="10">NO EXISTE INFORMACIÓN EN HAWK</td>
                </tr>
            `;

            // Mostrar tabla vacía para juicios si no hay datos
            juiciosContent = `
                <table class="striped">
                    <tr>
                        <th class="table-title" colspan="12">MENSAJE POR INFORMACION DE JUICIOS (NOMBRE DEL CONSULTADO ASOCIADO A UN JUICIO COMO DEMANDADO)</th>
                    </tr>
                    <tr>
                        <td>NUM</td>
                        <td>FECHA REPORTE</td>
                        <td>CLAVE</td>
                        <td colspan="9">MENSAJE</td>
                    </tr>
                    <tr>
                        <td colspan="12">NO EXISTE INFORMACION REPORTADA</td>
                    </tr>
                </table>
            `;

            // Tabla vacía para PEP si no hay datos
            pepContent = `
                <table class="striped">
                    <tr>
                        <th class="table-title" colspan="13">MENSAJE POR PERSONA EXPUESTA POLÍTICAMENTE (PEP)</th>
                    </tr>
                    <tr>
                        <td>NUM</td>
                        <td>FECHA REPORTE</td>
                        <td>CLAVE</td>
                        <td colspan="5">DESCRIPCION</td>
                        <td colspan="2">RESPONSABILIDAD</td>
                        <td>REPORTADO POR</td>
                        <td>MENSAJE</td>
                        <td>COINCIDENCIA POR DATOS DE</td>
                    </tr>
                    <tr>
                        <td colspan="13">NO EXISTE INFORMACION REPORTADA</td>
                    </tr>
                </table>
            `;

            // Tabla vacía para clave 680 si no hay datos
            tabla680Content = `
                <table class="striped">
                    <tr>
                        <th class="table-title" colspan="12">INFORMACIÓN PARA PREVENCIÓN DE LAVADO DE DINERO (PLD)</th>
                    </tr>
                    <tr>
                        <th class="table-title" colspan="12">MENSAJE POR INFORMACIÓN REPORTADA POR OFAC - OFICINA DE CONTROL DE ACTIVOS DE EXTRANJEROS DEL DEPARTAMENTO DEL TESORO DE EEUU.</th>
                    </tr>
                    <tr>
                        <td>NUM</td>
                        <td>FECHA DE PUBLICACION</td>
                        <td>CLAVE</td>
                        <td colspan="5">RESPONSABILIDAD</td>
                        <td colspan="2">REPORTADO POR</td>
                        <td>MENSAJE</td>
                        <td>COINCIDENCIA POR DATOS DE</td>
                    </tr>
                    <tr>
                        <td colspan="12">NO EXISTE INFORMACION REPORTADA</td>
                    </tr>
                </table>
            `;

            // Tabla vacía para Buro Empresarial si no hay datos
            buroEmpresarialContent = `
                <table class="striped">
                    <tr>
                        <th class="table-title" colspan="12">MENSAJE POR INFORMACION REPORTADA EN BURO DE CREDITOS EMPRESARIALES</th>
                    </tr>
                    <tr>
                        <td>NUM</td>
                        <td>FECHA REPORTE</td>
                        <td>CLAVE</td>
                        <td>RESPONSABILIDAD</td>
                        <td>REPORTADO POR</td>
                        <td colspan="5">MENSAJE</td>
                        <td colspan="2">COINCIDENCIA POR DATOS DE</td>
                    </tr>
                    <tr>
                        <td colspan="12">NO EXISTE INFORMACION REPORTADA</td>
                    </tr>
                </table>
            `;
        }

        // Retornar el contenido combinado de las 5 tablas
        return `
            <table class="striped">
                <tr>
                    <th class="table-title" colspan="10">INFORMACIÓN EN HAWK</th>
                </tr>
                <tr>
                    <th class="table-title" colspan="10">MENSAJE POR INCONSISTENCIA EN DATOS</th>
                </tr>
                <tr>
                    <td>NUM</td>
                    <td>FECHA REPORTE</td>
                    <td>CLAVE</td>
                    <td colspan="5">MENSAJE</td>
                    <td colspan="2">COINCIDENCIA POR DATOS DE:</td>
                </tr>
                ${hawkContent ? hawkContent : `
                <tr>
                    <td colspan="10">NO EXISTE INFORMACIÓN EN HAWK</td>
                </tr>`}
            </table>
            ${juiciosContent}
            ${pepContent}
            ${tabla680Content}
            ${buroEmpresarialContent}
        `;
    }
}

module.exports = new HawkService();
