function obtenerDetalleCreditos(cuentas) {
    // Verificar si cuentas es un arreglo válido
    if (!Array.isArray(cuentas) || cuentas.length === 0) {
        // Generar tabla con mensaje de "no hay detalle de créditos" en lugar de no devolver nada
        return `
            <table class="striped credit">
                <tr>
                    <th class="table-title" colspan="46">DETALLE DE LOS CREDITOS</th>
                </tr>
                <tr>
                    <td colspan="46" style="text-align: center;">No hay detalle de créditos.</td>
                </tr>
            </table>`;
    }

    let html = `
        <table class="striped credit">
            <tr>
                <th class="table-title" colspan="46">DETALLE DE LOS CREDITOS</th>
            </tr>
            <tr>
                <td>#</td>
                <td colspan="3">TIPO DE CREDITO / CUENTA / RESPONSABILIDAD</td>
                <td colspan="2">OTORGANTE NO. CUENTA</td>
                <td colspan="1">MONEDA</td>
                <td colspan="2">ACTUALIZADO AL</td>
                <td colspan="2">APERTURA</td>
                <td colspan="2">ULTIMO PAGO</td>
                <td colspan="2">ULTIMA COMPRA</td>
                <td colspan="2">CIERRE</td>
                <td colspan="2">ULT VEZ SDO = 0</td>
                <td colspan="2">LIMITE DE CREDITO</td>
                <td colspan="2">CREDITO MAXIMO</td>
                <td colspan="2">SALDO ACTUAL</td>
                <td colspan="2">SALDO VENCIDO</td>
                <td colspan="2">MONTO ULTIMO PAGO</td>
                <td colspan="2">MONTO A PAGAR</td>
                <td colspan="2">FORMA DE PAGO EN FECHA ACTUALIZACION</td>
                <td colspan="2">MAX MOROS / MOP FECHA IMPORTE</td>
                <td colspan="9">HISTORICO DE PAGOS CLAVE DE OBSERVACION</td>
            </tr>`;

                     cuentas.forEach((cuenta, index) => {
                const camposHistorico = formatCreditDetails([cuenta]); 
                const frecuenciaPagoDescripcion = getFrecuenciaPagos(cuenta.frecuenciaPagos, cuenta.tipoCuenta);
            
                html += `
                <tr>
                    <td>${index + 1}</td>
                    <td colspan="3">${getTipoContrato(cuenta.tipoContrato)} / ${getTipoResponsabilidad(cuenta.indicadorTipoResponsabilidad)} / ${getTipoCuenta(cuenta.tipoCuenta)}</td>
                    <td colspan="2">${cuenta.nombreOtorgante || ''}</td>
                    <td>${cuenta.claveUnidadMonetaria || ''}</td>
                    <td colspan="2">${formatDate(cuenta.fechaActualizacion)}</td>
                    <td colspan="2">${formatDate(cuenta.fechaAperturaCuenta)}</td>
                    <td colspan="2">${formatDate(cuenta.fechaUltimoPago)}</td>
                    <td colspan="2">${formatDate(cuenta.fechaUltimaCompra)}</td>
                    <td colspan="2">${formatDate(cuenta.fechaCierreCuenta)}</td>
                    <td colspan="2">${formatDate(cuenta.ultimaFechaSaldoCero)}</td> 
                    <td colspan="2">${formatCurrency(limpiarValor(cuenta.limiteCredito))}</td>
                    <td colspan="2">${formatCurrency(limpiarValor(cuenta.creditoMaximo))}</td>
                    <td colspan="2">${formatCurrency(limpiarValor(cuenta.saldoActual))}</td>
                    <td colspan="2">${formatCurrency(limpiarValor(cuenta.saldoVencido))}</td>
                    <td colspan="2">${formatCurrency(limpiarValor(cuenta.montoUltimoPago))}</td>
                    <td colspan="2">${formatCurrency(cuenta.montoPagar)} ${frecuenciaPagoDescripcion}</td>
                    <td colspan="2">${getFormaPago(cuenta.formaPagoActual)}</td>
                    <td colspan="2">
                        ${cuenta.mopHistoricoMorosidadMasGrave ? `<p>${cuenta.mopHistoricoMorosidadMasGrave}</p>` : ''}
                        ${cuenta.fechaHistoricaMorosidadMasGrave ? `<p>${cuenta.fechaHistoricaMorosidadMasGrave.slice(2, 4)}/${parseInt(cuenta.fechaHistoricaMorosidadMasGrave.slice(4))}</p>` : ''}
                        ${cuenta.importeSaldoMorosidadHistMasGrave ? `<p>${formatCurrency(cuenta.importeSaldoMorosidadHistMasGrave)}</p>` : ''}
                    </td>
                  <td class="no-padding" colspan="9">
<table style="width: 100%;">
    <tr>
        <td colspan="3" class="no-padding">
            <table class="no-padma">
                <tr>
                    <td>
                        <p class="historicoIndicador">${cuenta.fechaMasRecienteHistoricoPagos ? cuenta.fechaMasRecienteHistoricoPagos.slice(4) : '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
                <tr>
                    <td class="second-child">
                        <p class="historicoIndicador">${cuenta.PrimerCampo || '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="historicoIndicador">${cuenta.CuartoCampo || '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
            </table>
        </td>
        <td colspan="3" class="no-padding">
            <table class="no-padma">
                <tr>
                   <td>
                       <p class="historicoIndicador">${cuenta.fechaMasRecienteHistoricoPagos ? removeOneFilter(cuenta.fechaMasRecienteHistoricoPagos.slice(4)) : '&nbsp;&nbsp;'}</p>
                   </td>
                </tr>
                <tr>
                    <td class="second-child">
                        <p class="historicoIndicador">${cuenta.SegundoCampo || '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="historicoIndicador">${cuenta.QuintoCampo || '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
            </table>
        </td>
        <td colspan="3" class="no-padding">
            <table class="no-padma">
                <tr>
                   <td>
                        <p class="historicoIndicador">${cuenta.fechaMasRecienteHistoricoPagos ? removeTwoFilter(cuenta.fechaMasRecienteHistoricoPagos.slice(4)) : '&nbsp;&nbsp;'}</p>
                   </td>
                </tr>
                <tr>
                    <td class="second-child">
                        <p class="historicoIndicador">${cuenta.TercerCampo || '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="historicoIndicador">${cuenta.SextoCampo || '&nbsp;&nbsp;'}</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    ${cuenta.claveObservacion && CLAVES_OBSERVACION[cuenta.claveObservacion] ? `
    <tr>
        <td colspan="9" style="text-align: left; padding-left: 10px; border-top: none;">
            <strong>${cuenta.claveObservacion} = ${CLAVES_OBSERVACION[cuenta.claveObservacion]}</strong>
        </td>
    </tr>
    ` : ''}
</table>
</td>`;
        });
        
        html += `</table>`;
        return html;
    }
function getFrecuenciaPagos(frecuencia, tipoCuenta) {
    const frecuenciasPagosFijos = {
        'B': 'Bimestral',
        'D': 'Diario',
        'H': 'Semestral',
        'K': 'Catorcenal',
        'M': 'Mensual',
        'P': 'Deducción del salario',
        'Q': 'Trimestral',
        'S': 'Quincenal',
        'V': 'Variable',
        'W': 'Semanal',
        'Y': 'Anual'
    };

    const frecuenciasRevolventes = {
        'Z': 'Pago mínimo'
    };

    if (tipoCuenta === 'I' || tipoCuenta === 'M') {
        return frecuenciasPagosFijos[frecuencia] || 'Desconocido';
    } else if (tipoCuenta === 'R' || tipoCuenta === 'O') {
        return frecuenciasRevolventes[frecuencia] || 'Pago mínimo';
    } else {
        return 'Desconocido';
    }
}

    
function removeOneFilter(value) {
        return parseInt(value, 10) - 1;
    }
    
function removeTwoFilter(value) {
        return parseInt(value, 10) - 2;
    }


// Función para imprimir los meses de historial de pagos en orden inverso
function imprimeMes(mes, numMeses, opcion) {
    let meses = "";
    if (opcion === 1) {
        meses = " EFMAMJJASOND"; // Enero a Diciembre (Opción 1: reverso)
        const inicio = Math.max(mes - numMeses + 1, 1); // Ajustar el rango para no exceder
        return meses.slice(inicio, mes + 1).split('').reverse().join(''); // Invertir los meses
    } else {
        meses = " DNOSAJJMAMFE"; // Diciembre a Enero (Opción 0: directo)
        return meses.slice(mes, mes + numMeses); // Mostrar los meses en orden directo
    }
}

// Función para generar los campos de historial de pagos
function formatCreditDetails(cuentas) {
    if (!Array.isArray(cuentas)) {
        throw new TypeError("La propiedad 'cuentas' no es un arreglo o no está disponible");
    }

    cuentas.forEach(cuenta => {
        const mesFecha = cuenta.fechaMasRecienteHistoricoPagos;
        const histPagos = cuenta.historicoPagos || ''; // Si historicoPagos no existe, asignamos una cadena vacía.
        const lenHisPagos = histPagos.length; // Número de pagos en el histórico

        if (mesFecha && lenHisPagos > 0) {
            const mes = parseInt(mesFecha.slice(2, 4), 10); // Mes de la fecha del histórico

            // Asegurarse de mostrar el número exacto de meses basado en el histórico
            if (lenHisPagos >= mes) {
                cuenta.PrimerCampo = imprimeMes(mes, lenHisPagos, 1); // Reverso del mes con número exacto de pagos
                const HisPagosSeg = histPagos.slice(mes);
                const lenHisPagosSeg = HisPagosSeg.length;
                cuenta.CuartoCampo = histPagos.slice(0, mes);
                
                if (lenHisPagosSeg >= 12) {
                    cuenta.SegundoCampo = imprimeMes(1, 12, 0);
                    cuenta.QuintoCampo = HisPagosSeg.slice(0, 12);
                    const HisPagosTer = HisPagosSeg.slice(12);
                    const lenHisPagTer = HisPagosTer.length;
                    cuenta.TercerCampo = imprimeMes(1, lenHisPagTer + 1, 0);
                    cuenta.SextoCampo = HisPagosTer;
                } else {
                    cuenta.SegundoCampo = imprimeMes(1, lenHisPagosSeg, 0);
                    cuenta.QuintoCampo = HisPagosSeg.slice(0, lenHisPagosSeg);
                }
            } else {
                // Mostrar el número de meses disponibles si son menos que el mes actual
                cuenta.PrimerCampo = imprimeMes(mes, lenHisPagos, 1);
                cuenta.CuartoCampo = histPagos;
            }
        } else {
            // Si no hay historial de pagos ni clave de observación, mostramos la leyenda
            cuenta.PrimerCampo = 'Cuenta sin histórico de pagos y sin clave de observación';
            cuenta.CuartoCampo = ''; // Podemos dejar campos adicionales vacíos
        }
    });
    return cuentas;
}


function getTipoContrato(tipoContrato) {
    const tipos = {
        'AF': 'Aparatos/Muebles',
        'AG': 'Agropecuario (PFAE)',
        'AL': 'Arrendamiento Automotriz',
        'AP': 'Aviación',
        'AU': 'Compra de Automóvil',
        'BD': 'Fianza',
        'BT': 'Bote / Lancha',
        'CC': 'Tarjeta de Crédito',
        'CE': 'Cartas de Crédito (PFAE)',
        'CF': 'Crédito fiscal',
        'CL': 'Linea de Crédito',
        'CO': 'Consolidación',
        'CS': 'Crédito Simple (PFAE)',
        'CT': 'Con Colateral (PFAE)',
        'DE': 'Descuentos (PFAE)',
        'EQ': 'Equipo',
        'FI': 'Fideicomiso (PFAE)',
        'FT': 'Factoraje',
        'HA': 'Habilitación o Avío (PFAE)',
        'HE': 'Préstamo tipo "Home Equity"',
        'HI': 'Mejoras a la casa',
        'LS': 'Arrendamiento',
        'LR': 'Línea de Crédito Reinstalable',
        'MI': 'Otros',
        'OA': 'Otros adeudos vencidos (PFAE)',
        'PA': 'Préstamo para Personas Físicas con Actividad Empresarial (PFAE)',
        'PB': 'Editorial',
        'PG': 'PGUE - Préstamo como garantía de unidades industriales para PFAE',
        'PE': 'Préstamo personal',
        'PN': 'Préstamo de nómina',
        'PQ': 'Quirografario (PFAE)',
        'PR': 'Prendario (PFAE)',
        'PS': 'Pago de Servicios',
        'RC': 'Reestructurado (PFAE)',
        'RD': 'Redescuento (PFAE)',
        'RE': 'Bienes Raíces',
        'RF': 'Refaccionario (PFAE)',
        'RN': 'Renovado (PFAE)',
        'RV': 'Vehículo Recreativo',
        'SC': 'Tarjeta garantizada',
        'SE': 'Préstamo garantizado',
        'SG': 'Seguros',
        'SM': 'Segunda hipoteca',
        'ST': 'Préstamo para estudiante',
        'TE': 'Tarjeta de Crédito Empresarial',
        'UK': 'Desconocido',
        'US': 'Préstamo no garantizado'
    };
    return tipos[tipoContrato] || 'Desconocido';
}

function getTipoResponsabilidad(indicador) {
    const tipos = {
        'A': 'Usuario Autorizado',
        'C': 'Obligado Solidario',
        'I': 'Individual',
        'J': 'Mancomunado'
    };
    return tipos[indicador] || 'Desconocido';
}

function getTipoCuenta(tipoCuenta) {
    const tipos = {
        'I': 'Pagos Fijos',
        'R': 'Revolvente',
        'M': 'Hipoteca',
        'O': 'Sin Límite Pre-establecido',
    };
    return tipos[tipoCuenta] || 'Desconocido';
}

// Función para formatear fechas (mes en texto y año con dos dígitos)
function formatDate(fecha) {
    // Verificar si la fecha es válida y tiene el formato correcto
    if (!fecha || fecha.length !== 8) {
        return ' '; // Devuelve un espacio vacío si no tiene el formato esperado
    }

    // Array con los nombres de los meses abreviados
    const meses = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    // Obtener el mes y el año de la fecha
    const mes = parseInt(fecha.slice(2, 4), 10); // Convertir a entero para usar en el array
    const anio = fecha.slice(6, 8); // Obtener solo los últimos dos dígitos del año

    // Asegurar que el mes esté en el rango válido (1-12)
    if (mes < 1 || mes > 12) {
        return 'Mes inválido'; // Mensaje de error si el mes no es válido
    }

    // Formatear la fecha como "Mes Año"
    return `${meses[mes - 1]}/${anio}`; // Retorna el mes en texto y el año en dos dígitos
}


  // Función para limpiar valores que contienen '+'
  function limpiarValor(valor) {
    if (typeof valor === 'string') {
        return valor.replace('+', '');
    }
    return valor;
    }

function formatCurrency(valor) {
    if (!valor) return '';
    return Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(valor);
}

function getFormaPago(formaPago) {
    const formas = {
        '00': 'Muy reciente para ser calificada.',
        '01': 'Al corriente',
        '02': 'Atraso 1 a 29 días',
        '03': 'Atraso 30 a 59 días',
        '04': 'Atraso 60 a 89 días',
        '05': 'Atraso 90 a 119 días',
        '06': 'Atraso 120 a 149 días',
        '07': 'Atraso 150 días hasta 12 meses',
        '96': 'Atraso de más de 12 meses',
        '97': 'Deuda parcial o total sin recuperar',
        '99': 'Fraude cometido',
        'UR': 'Cuenta sin información'

    };
    return `${formaPago || ''} - ${formas[formaPago] || 'Descripción no encontrada'}`;
}

const CLAVES_OBSERVACION = {
    'AD': 'Cuenta o monto en aclaración directamente con el Usuario',
    'CA': 'Cuenta al corriente vendida o cedida a un Usuario de una Sociedad de Información Crediticia',
    'CC': 'Cuenta cancelada o cerrada',
    'CD': 'Disminución del monto a pagar debido a un acuerdo con la Institución',
    'CL': 'Cuenta en cobranza pagada totalmente, sin causar quebranto',
    'CO': 'Crédito en controversia',
    'CP': 'Crédito hipotecario con bien inmueble declarado como pérdida parcial o total',
    'CT': 'Crédito hipotecario con bien inmueble declarado cómo pérdida parcial o total a causa de catástrofe natural.',
    'CV': 'Cuenta que NO está al corriente vendida o cedida a un Usuario de Buró de Crédito',
    'FD': 'Cuenta con fraude atribuible al Cliente',
    'FN': 'Fraude NO atribuible al Cliente',
    'FP': 'Fianza pagada',
    'FR': 'Adjudicación y/o aplicación de garantía',
    'GP': 'Ejecución de Garantía Prendaria o Fiduciaria en Pago por Crédito',
    'IA': 'Cuenta inactiva',
    'IM': 'Integrante Causante de Mora',
    'IS': 'Integrante que fue subsidiado para evitar mora',
    'LC': 'Convenio de finiquito con pago menor a la deuda, acordado con el Cliente (Quita)',
    'LG': 'Pago menor de la deuda por programa institucional o de gobierno, incluyendo los apoyos a damnificados por catástrofes naturales y Contingencia Sanitaria Covid-19 (Quita)',
    'LO': 'En localización',
    'LS': 'Tarjeta de Crédito robada o extraviada',
    'MP': 'Reestructura crediticia por el buen comportamiento demostrado por Cliente en el pago de sus obligaciones crediticias',
    'NA': 'Cuenta al corriente vendida o cedida a un NO Usuario de Buró de Crédito',
    'NV': 'Cuenta vencida vendida a un NO Usuario de Buró de Crédito',
    'PC': 'Cuenta en Cobranza',
    'PD': 'Prórroga otorgada debido a un desastre natural',
    'PE': 'Prórroga otorgada al acreditado por situaciones especiales',
    'PI': 'Prórroga otorgada al acreditado por invalidez o defunción',
    'PR': 'Prórroga otorgada debido a una pérdida de relación laboral',
    'RA': 'Cuenta reestructurada con o sin pago menor, por programa institucional o gubernamental',
    'RI': 'Robo de identidad',
    'RF': 'Resolución judicial favorable al Cliente',
    'RN': 'Cuenta reestructurada debido a un proceso judicial',
    'RV': 'Cuenta reestructurada sin pago menor por modificación de la situación del cliente a petición de éste',
    'SG': 'Demanda por el Usuario',
    'UP': 'Cuenta que causa castigo y/o quebranto',
    'VR': 'Dación en pago o Renta'
};

module.exports = { obtenerDetalleCreditos };
