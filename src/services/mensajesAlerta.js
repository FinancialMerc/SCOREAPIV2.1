class MensajesService {
    generarMensajesAlerta(reporteData) {
        const descripcionesAlertas = [
            'Fecha de defunción en la Base de Datos.',
            'El RFC del Cliente no corresponde con el RFC de la Base de Datos.',
            'La Dirección no corresponde con la Dirección de la Base de Datos.',
            'Existe información adicional en el Buró de Crédito Comercial.',
            'Dirección inválida en la consulta.',
            'Usuario con menos de 5 mil registros en el expediente.'
        ];

        // Obtener el campo mensajesAlerta del resumenReporte
        const mensajesAlerta = reporteData.reporte.respuesta.persona.resumenReporte[0].mensajesAlerta;
        // Generar contenido de los mensajes de alerta
        let mensajesContent = '';
        if (mensajesAlerta !== 'NNNNN') {
            mensajesAlerta.split('').forEach((mensaje, index) => {
                if (mensaje === 'Y' && descripcionesAlertas[index]) {
                    mensajesContent += `
                        <tr>
                            <td>${index + 1}</td>
                            <td colspan="6">${descripcionesAlertas[index]}</td>
                        </tr>
                    `;
                }
            });
        } else {
            mensajesContent = `
                <tr>
                    <td>1</td>
                    <td colspan="6">NO EXISTEN MENSAJES</td>
                </tr>
            `;
        }

        return mensajesContent;
    }
}

module.exports = new MensajesService();