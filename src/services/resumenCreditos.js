class ResumenCreditosService {
    generarHtmlResumen(cuentas) {
        // Validar que cuentas sea un arreglo; si no, crear el HTML con un mensaje informativo
        if (!Array.isArray(cuentas) || cuentas.length === 0) {
            return `
                <table class="striped">
                    <tr>
                        <th class="table-title" colspan="46">RESUMEN DE CRÉDITOS (M.N.)</th>
                    </tr>
                    <tr>
                        <td colspan="46" style="text-align: center;">No hay detalle de créditos.</td>
                    </tr>
                </table>`;
        }
        // Crear los objetos de resumen para cuentas abiertas y cerradas
        let resumenAbiertas = this.crearResumenCuentas();
        let resumenCerradas = this.crearResumenCuentas();

        // Procesamos cada cuenta dentro de cuentas
        cuentas.forEach(cuenta => {
            const mop = cuenta.formaPagoActual || ''; 

            // Cuentas abiertas (sin fecha de cierre)
            if (!cuenta.fechaCierreCuenta) {
                this.actualizarResumenCuenta(resumenAbiertas, mop, cuenta);
            } else {
                // Cuentas cerradas (con fecha de cierre)
                this.actualizarResumenCuenta(resumenCerradas, mop, cuenta);
            }
        });

        // Generamos el HTML de la tabla
        return this.generarTablaHtml(resumenAbiertas, resumenCerradas);
    }

    // Crea una estructura inicial para almacenar los resúmenes por MOP
    crearResumenCuentas() {
        return {
            "00": this.crearEstructuraCuenta(),
            "01": this.crearEstructuraCuenta(),
            "02": this.crearEstructuraCuenta(),
            "03": this.crearEstructuraCuenta(),
            "04": this.crearEstructuraCuenta(),
            "05": this.crearEstructuraCuenta(),
            "06": this.crearEstructuraCuenta(),
            "07": this.crearEstructuraCuenta(),
            "96": this.crearEstructuraCuenta(),
            "97": this.crearEstructuraCuenta(),
            "99": this.crearEstructuraCuenta(),
            "UR": this.crearEstructuraCuenta() // Unknown MOP
        };
    }

    // Estructura base de cada cuenta para mantener los totales
    crearEstructuraCuenta() {
        return {
            Total: 0,
            LimiteCredito: 0,
            CreditoMaximo: 0,
            SaldoActual: 0,
            SaldoVencido: 0,
            MontoPagar: 0
        };
    }

    // Función para actualizar el resumen de cuentas
    actualizarResumenCuenta(resumen, mop, cuenta) {
        resumen[mop].Total += 1;
        resumen[mop].LimiteCredito += this.limpiarValorNumerico(cuenta.limiteCredito || 0);
        resumen[mop].CreditoMaximo += this.limpiarValorNumerico(cuenta.creditoMaximo || 0);
        resumen[mop].SaldoActual += this.limpiarValorNumerico(cuenta.saldoActual || 0);
        resumen[mop].SaldoVencido += this.limpiarValorNumerico(cuenta.saldoVencido || 0); // Acumulación de Saldo Vencido
        resumen[mop].MontoPagar += this.limpiarValorNumerico(cuenta.montoPagar || 0);
    }

    // Genera la tabla HTML para mostrar el resumen de las cuentas abiertas y cerradas, junto con los totales
    generarTablaHtml(resumenAbiertas, resumenCerradas) {
        let totalAbiertas = this.crearEstructuraCuenta();
        let totalCerradas = this.crearEstructuraCuenta();

        let html = `
           <table class="striped">
                <tr>
                    <th class="table-title" colspan="46">RESUMEN DE CRÉDITOS (M.N.)</th>
                </tr>
                <tr>
                    <td colspan="14">Cuentas Abiertas</td>
                    <td colspan="12">Cuentas Cerradas</td>
                </tr>
                <tr>
                    <td colspan="2">MOP</td>
                    <td colspan="2">Cuentas abiertas</td>
                    <td colspan="2">LIMITE ABIERTAS</td>
                    <td colspan="2">MAXIMO ABIERTAS</td>
                    <td colspan="2">SALDO ACTUAL ABIERTAS</td>
                    <td colspan="2">SALDO VENCIDO ABIERTAS</td>
                    <td colspan="2">PAGO A REALIZAR</td>
                    <td colspan="2">CUENTAS CERRADAS</td>
                    <td colspan="2">LIMITE CERRADAS</td>
                    <td colspan="2">MAXIMO CERRADAS</td>
                    <td colspan="2">SALDO ACTUAL CERRADAS</td>
                    <td colspan="2">MONTO CERRADAS</td>
                </tr>`;

        const ordenMOP = ["UR", "00", "01", "02", "03", "04", "05", "06", "07", "96", "97", "99"];

        ordenMOP.forEach(mop => {
            const abiertas = resumenAbiertas[mop];
            const cerradas = resumenCerradas[mop];

            if (abiertas.Total !== 0 || cerradas.Total !== 0) {
                totalAbiertas.Total += abiertas.Total;
                totalAbiertas.LimiteCredito += abiertas.LimiteCredito;
                totalAbiertas.CreditoMaximo += abiertas.CreditoMaximo;
                totalAbiertas.SaldoActual += abiertas.SaldoActual;
                totalAbiertas.SaldoVencido += abiertas.SaldoVencido;
                totalAbiertas.MontoPagar += abiertas.MontoPagar;

                totalCerradas.Total += cerradas.Total;
                totalCerradas.LimiteCredito += cerradas.LimiteCredito;
                totalCerradas.CreditoMaximo += cerradas.CreditoMaximo;
                totalCerradas.SaldoActual += cerradas.SaldoActual;
                totalCerradas.SaldoVencido += cerradas.SaldoVencido; // Acumulamos saldo vencido aquí
                totalCerradas.MontoPagar += cerradas.MontoPagar;

                html += `
                    <tr>
                        <td colspan="2">${mop}</td>
                        <td colspan="2">${abiertas.Total}</td>
                        <td colspan="2">${this.formatCurrency(abiertas.LimiteCredito)}</td>
                        <td colspan="2">${this.formatCurrency(abiertas.CreditoMaximo)}</td>
                        <td colspan="2">${this.formatCurrency(abiertas.SaldoActual)}</td>
                        <td colspan="2">${this.formatCurrency(abiertas.SaldoVencido)}</td>
                        <td colspan="2">${this.formatCurrency(abiertas.MontoPagar)}</td>
                        <td colspan="2">${cerradas.Total}</td>
                        <td colspan="2">${this.formatCurrency(cerradas.LimiteCredito)}</td>
                        <td colspan="2">${this.formatCurrency(cerradas.CreditoMaximo)}</td>
                        <td colspan="2">${this.formatCurrency(cerradas.SaldoActual)}</td>
                        <td colspan="2">${this.formatCurrency(cerradas.SaldoVencido)}</td> <!-- Saldo vencido también en monto cerradas -->
                    </tr>`;
            }
        });

        // Fila para mostrar los totales de cuentas abiertas y cerradas
        html += `
            <tr>
                <td colspan="2"><strong>Total</strong></td>
                <td colspan="2"><strong>${totalAbiertas.Total}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalAbiertas.LimiteCredito)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalAbiertas.CreditoMaximo)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalAbiertas.SaldoActual)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalAbiertas.SaldoVencido)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalAbiertas.MontoPagar)}</strong></td>
                <td colspan="2"><strong>${totalCerradas.Total}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalCerradas.LimiteCredito)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalCerradas.CreditoMaximo)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalCerradas.SaldoActual)}</strong></td>
                <td colspan="2"><strong>${this.formatCurrency(totalCerradas.SaldoVencido)}</strong></td>
            </tr>`;



        html += "</table>";
        return html;
    }

    limpiarValorNumerico(valor) {
        if (typeof valor === 'string') {
            return parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;
        }
        return parseFloat(valor) || 0;
    }

    formatCurrency(value) {
        if (isNaN(value)) return '$0.00';
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
    }
}

module.exports = new ResumenCreditosService();
