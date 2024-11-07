class DetalleConsultasService {
    constructor() {
        this.currencyFormatter = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });
    }

    formatCurrency(value) {
        return this.currencyFormatter.format(value);
    }

    formatFecha(fecha) {
        if (fecha && fecha.length === 8) {
            return `${fecha.slice(0, 2)}-${fecha.slice(2, 4)}-${fecha.slice(4)}`;
        }
        return fecha || 'N/A';
    }

    obtenerTipoResponsabilidad(tipo) {
        const responsabilidades = {
            'A': 'Usuario Autorizado',
            'C': 'Obligado Solidario',
            'I': 'Individual',
            'J': 'Mancomunado'
        };
        return responsabilidades[tipo] || '';
    }

    obtenerTipoContrato(contrato) {
        const contratos = {
            'AF': 'Aparatos / Muebles',
            'OA': 'Otros adeudos vencidos (PFAE)',
            'AG': 'Agropecuario (PFAE)',
            'PA': 'Préstamo para Personas Físicas con Actividad Empresarial (PFAE)',
            'AL': 'Arrendamiento Automotriz',
            'PB': 'Editorial',
            'AP': 'Aviación',
            'PG': 'PGUE - Préstamo como garantía de unidades industriales para PFAE',
            'AU': 'Compra de Automóvil',
            'PL': 'Préstamo personal',
            'BD': 'Fianza',
            'PN': 'Préstamo de nómina',
            'BT': 'Bote / Lancha',
            'PQ': 'Quirografario (PFAE)',
            'CC': 'Tarjeta de Crédito',
            'PR': 'Prendario (PFAE)',
            'CE': 'Cartas de Crédito (PFAE)',
            'PS': 'Pago de Servicios',
            'CF': 'Crédito fiscal',
            'RC': 'Reestructurado (PFAE)',
            'CL': 'Línea de Crédito',
            'RD': 'Redescuento (PFAE)',
            'CO': 'Consolidación',
            'RE': 'Bienes Raíces',
            'CS': 'Crédito Simple (PFAE)',
            'RF': 'Refaccionario (PFAE)',
            'CT': 'Con Colateral (PFAE)',
            'RN': 'Renovado (PFAE)',
            'DE': 'Descuentos (PFAE)',
            'RV': 'Vehículo Recreativo',
            'EQ': 'Equipo',
            'SC': 'Tarjeta garantizada',
            'FI': 'Fideicomiso (PFAE)',
            'SE': 'Préstamo garantizado',
            'FT': 'Factoraje',
            'SG': 'Seguros',
            'HA': 'Habilitación o Avío (PFAE)',
            'SM': 'Segunda hipoteca',
            'HE': 'Préstamo tipo “Home Equity”',
            'ST': 'Préstamo para estudiante',
            'HI': 'Mejoras a la casa',
            'TE': 'Tarjeta de Crédito Empresarial',
            'LS': 'Arrendamiento',
            'UK': 'Desconocido',
            'LR': 'Línea de Crédito Reinstalable',
            'US': 'Préstamo no garantizado',
            'MI': 'Otros'
        };
        
     // Verificar si el contrato existe antes de aplicar slice
     if (!contrato) {
        return 'Desconocido'; // Retorna 'Desconocido' si contrato es undefined o null
    }

    return contratos[contrato.slice(0, 2)] || 'Desconocido';
}

    generarHtmlDetalleConsultas(consultas) {
        if (!Array.isArray(consultas)) {
            consultas = []; // Si no es un array, inicializamos como un array vacío
        }
        return `
            <table class="striped">
                <tr>
                    <th class="table-title" colspan="11">DETALLE DE LAS CONSULTAS</th>
                </tr>
                <tr>
                    <td>OTORGANTE</td>
                    <td>FECHA DE LA CONSULTA</td>
                    <td>RESPONSABILIDAD</td>
                    <td colspan="5">TIPO DE CONTRATO</td>
                    <td colspan="2">IMPORTE</td>
                    <td>TIPO DE MONEDA</td>
                </tr>
                ${consultas.map(consulta => `
                    <tr>
                        <td>${consulta.nombreOtorgante || 'N/A'}</td>
                        <td>${this.formatFecha(consulta.fechaConsulta)}</td>
                        <td>${this.obtenerTipoResponsabilidad(consulta.indicadorTipoResponsabilidad)}</td>
                        <td colspan="5">${this.obtenerTipoContrato(consulta.tipoContrato)}</td>
                        <td colspan="2">${consulta.importeContrato ? this.formatCurrency(consulta.importeContrato) : 'N/A'}</td>
                        <td>${consulta.claveUnidadMonetaria || ''}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    }
}

module.exports = new DetalleConsultasService();
