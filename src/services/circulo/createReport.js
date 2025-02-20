function generarReporteHTML(data) {
    const {
      currentDate,
      folioConsulta,
      persona,
      fico_score,
      graph_score,
      mensajes,
      scores,
      domicilios,
      empleos,
      resume,
      totalResume,
      indicators,
      creditos,
      consultas
    } = data;
  
    return `
    <div class="page-pdf">
      <table cellspacing="0" cellpadding="0" class="no-border">
        <tr>
          <td>
            <img align="left" class="logo" style="width: 100px; height: 50px;" src="./static/img/score-1400.png">
          </td>
          <td>
            <p class="text-center title big-title">Reporte de credito consolidado</p>
          </td>
          <td>
            <p><b>Fecha de consulta:</b> ${currentDate}</p>
            <p><b>Folio consulta:</b> ${folioConsulta}</p>
          </td>
        </tr>
      </table>
      <!-- header -->
      <div>
        <table cellspacing="0" cellpadding="0" class="striped">
          <tr class="table-header">
            <td><b>Datos Generales</b></td>
            <td class="text-right">
              <b>EXTENDED ${fico_score ? fico_score.score.valor : ''}</b>
            </td>
          </tr>
          <tr>
            <td>
              <div style="padding-right: 30px;" class="border-elements">
                <ul class="bullet-none">
                  <li><span>Nombre (s):</span> ${persona.nombres}</li>
                  <li><span>Apellido Paterno:</span> ${persona.apellidoPaterno}</li>
                  <li><span>Apellido Materno:</span> ${persona.apellidoMaterno}</li>
                  <li><span>Fecha de Nacimiento:</span> ${persona.fechaNacimiento}</li>
                  <li><span>RFC:</span> ${persona.RFC}</li>
                  ${ persona.CURP ? `<li><span>CURP:</span> ${persona.CURP}</li>` : '' }
                </ul>
              </div>
            </td>
            <!-- data client -->
            <td>
              <div id="chart">
                <!-- Si graph_score ya es un string HTML (por ejemplo, un SVG) -->
                ${graph_score}
              </div>
            </td>
          </tr>
          <tr class="table-header">
            <td>Mensajes</td>
            <td>Razones Score</td>
          </tr>
          <tr>
            <td>
              <div>
                ${ mensajes && mensajes.length 
                  ? `<ul>${mensajes.map(m => `<li>${m.tipoMensaje} ${m.leyenda}</li>`).join('')}</ul>`
                  : `<p>No hay mensajes...</p>`
                }
              </div>
            </td>
            <td>
              ${ scores && scores.length 
                  ? `<ul>${scores.map(score => score.razones.map(razon => `<li>${razon}</li>`).join('')).join('')}</ul>`
                  : `<p>No hay razones...</p>`
                }
            </td>
          </tr>
        </table>
      </div>
      <!-- domicilios -->
      <div class="mt-5">
        <p class="titles">Domicilios</p>
        <table cellspacing="0" cellpadding="0" class="striped border-table border-elements">
          <tr class="table-header border-elements">
            <td>#</td>
            <td>Calle y Número</td>
            <td>Colonia</td>
            <td>Del/Mpio</td>
            <td>Ciudad</td>
            <td>Estado</td>
            <td>CP</td>
            <td>Telefono</td>
            <td>Fecha de</td>
          </tr>
          ${ domicilios.map((domicilio, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${domicilio.direccion}</td>
              <td>${domicilio.coloniaPoblacion}</td>
              <td>${domicilio.delegacionMunicipio}</td>
              <td>${domicilio.ciudad}</td>
              <td>${domicilio.estado}</td>
              <td>${domicilio.CP}</td>
              <td>${domicilio.telefono}</td>
              <td>${domicilio.fechaResidencia}</td>
            </tr>
          `).join('')}
        </table>
      </div>
      <!-- empleos -->
      <div>
        <p class="titles">Empleos</p>
        <table cellspacing="0" cellpadding="0" class="striped">
          <tr class="table-header">
            <td>#</td>
            <td>Compañía</td>
            <td>Puesto</td>
            <td>Salario</td>
            <td>Calle y Número</td>
            <td>Colonia</td>
            <td>Del/Mpio</td>
            <td>Ciudad</td>
            <td>Estado</td>
            <td>CP</td>
            <td>Telefono</td>
            <td>Fecha de Registro</td>
          </tr>
          ${ empleos.map(empleo => `
            <tr>
              <td>#</td>
              <td>${empleo.nombreEmpresa}</td>
              <td>${empleo.puesto}</td>
              <td>${empleo.salarioMensual}</td>
              <td>${empleo.direccion}</td>
              <td>${empleo.coloniaPoblacion}</td>
              <td>${empleo.delegacionMunicipio}</td>
              <td>${empleo.ciudad}</td>
              <td>${empleo.estado}</td>
              <td>${empleo.CP}</td>
              <td>${empleo.telefono}</td>
              <td>${empleo.fechaContratacion}</td>
            </tr>
          `).join('')}
        </table>
      </div>
      <!-- resumen por producto -->
      <div class="mt-5">
        <p class="titles">Resumen por Producto</p>
        <table cellspacing="0" cellpadding="0" class="striped">
          <tr class="table-header">
            <td colspan="3">Descripcion</td>
            <td colspan="4">Montos[Pesos]</td>
            <td colspan="3">Pagos requeridos por Corte[Pesos]</td>
          </tr>
          <tr class="table-header">
            <td>&nbsp;&nbsp;</td>
            <td>Producto</td>
            <td>Cuentas</td>
            <td>Limite</td>
            <td>Aprobado</td>
            <td>Actual</td>
            <td>Vencido</td>
            <td>Pago semanal</td>
            <td>Pago quincenal</td>
            <td>Pago mensual</td>
          </tr>
          ${ resume.map(producto => `
            <tr>
              <td>
                <img style="width: 10px; height: 10px;" src="./static/img/${producto.behavior_img}" alt="behavior">
              </td>
              <td>${producto.tipoCredito}</td>
              <td>${producto.cuentas}</td>
              <td>${producto.limite}</td>
              <td>${producto.aprobado}</td>
              <td>${producto.actual}</td>
              <td>${producto.vencido}</td>
              <td>${producto.pagoSemanal}</td>
              <td>${producto.pagoQuincenal}</td>
              <td>${producto.pagoMensual}</td>
            </tr>
          `).join('')}
          <tr>
            <td colspan="2">Totales</td>
            <td>${totalResume.totalCuentas}</td>
            <td>${totalResume.totalLimite}</td>
            <td>${totalResume.totalAprobado}</td>
            <td>${totalResume.totalActual}</td>
            <td>${totalResume.totalVencido}</td>
            <td>${totalResume.totalPagoSemanal}</td>
            <td>${totalResume.totalPagoQuincenal}</td>
            <td>${totalResume.totalPagoMensual}</td>
          </tr>
        </table>
      </div>
      <!-- indicadores -->
      <div class="mt-5">
        <p class="titles">Indicadores</p>
        <table cellspacing="0" cellpadding="0">
          <thead>
            <tr class="table-header">
              <td>Créditos Activos [Sin fecha de cierre]</td>
              <td>Análisis de Deuda</td>
            </tr>
          </thead>
          <tr>
            <td>
              <div id="chart">
                <embed type="image/svg+xml" src="${indicators.graphActiveCredits}" />
              </div>
            </td>
            <td>
              <div id="chart">
                <embed type="image/svg+xml" src="${indicators.graphDebtAnalysis}" />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul>
                <li>Créditos Abiertos en el Presente Año = ${indicators.infoMinimunIndicators.openCredits}</li>
                <li>Crédito más antiguo = ${indicators.infoMinimunIndicators.oldestCredit}</li>
                <li>Monto mayor aprobado = ${indicators.infoMinimunIndicators.highestApprovedAmount}</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <!-- detalle de cuentas -->
      <div class="w-100-percentage mt-5">
        <p class="titles">Detalle de cuenta</p>
        <table cellspacing="0" cellpadding="0" class="striped" style="border-collapse: collapse; table-layout: fixed; width: 100%; margin: 0 auto; text-align: center;">
          <thead class="table-header">
            <tr class="table-header">
              <td colspan="6">Descripción</td>
              <td colspan="5">MONTOS</td>
              <td colspan="4">FECHAS</td>
              <td colspan="3">PEOR ATRASO</td>
            </tr>
            <tr class="table-header">
              <td colspan="6"></td>
              <td colspan="5">[Pesos]</td>
              <td colspan="4">[dd/mm/aa]</td>
              <td colspan="3" style="padding: 0; margin: 0; width: 100%; height: 100%;">
                <table cellspacing="0" cellpadding="0" style="padding: 0; margin: 0;">
                  <tr style="padding: 0; margin: 0;">
                    <td>Atraso</td>
                    <td>Monto</td>
                    <td class="text-bellow-text">Fecha</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr class="table-header">
              <td>&nbsp;</td>
              <td class="text-bellow-text">
                <p>Producto</p>
                <p>Responsabilidad</p>
              </td>
              <td class="text-bellow-text">Crédito</td>
              <td class="text-bellow-text">Otorgante</td>
              <td>Plazo</td>
              <td class="text-bellow-text">
                <p>Estatus</p>
                <p>CAN</p>
              </td>
              <td class="text-bellow-text">Limite</td>
              <td class="text-bellow-text">Aprobado</td>
              <td class="text-bellow-text">Actual</td>
              <td class="text-bellow-text">Vencido</td>
              <td>
                <p>A</p>
                <p>Pagar</p>
              </td>
              <td class="text-bellow-text">Reporte</td>
              <td class="text-bellow-text">Apertura</td>
              <td class="text-bellow-text">Cierre</td>
              <td>Pago</td>
              <td colspan="3">Situacion</td>
            </tr>
          </thead>
          <tbody>
            ${ creditos.map((cuenta, i) => `
              <tr>
                <td rowspan="2" class="text-bellow-text">
                  <p class="my-1">${i + 1}</p>
                  <p class="my-1">${cuenta.frecuenciaPagosParse}</p>
                  <img src="./static/img/${cuenta.imageBehaviorDetailAccount}" alt="Behavior" style="width: 10px;">
                </td>
                <td class="text-bellow-text">${cuenta.tipoCuentaParse}</td>
                <td class="text-bellow-text">${cuenta.tipoCreditoParse}</td>
                <td class="text-bellow-text">${cuenta.nombreOtorgante}</td>
                <td>
                  ${cuenta.numeroPagos ? cuenta.numeroPagos : ''}
                </td>
                <td>&nbsp;</td>
                <td>${cuenta.limiteCredito}</td>
                <td>${cuenta.creditoMaximo}</td>
                <td>${cuenta.saldoActual}</td>
                <td>${cuenta.saldoVencido}</td>
                <td>${cuenta.montoPagar}</td>
                <td class="text-bellow-text">${cuenta.fechaReporte}</td>
                <td class="text-bellow-text">${cuenta.fechaAperturaCuenta}</td>
                <td class="text-bellow-text">${cuenta.fechaCierreCuenta}</td>
                <td class="text-bellow-text">${cuenta.fechaUltimoPago}</td>
                <td colspan="3" style="padding: 0; margin: 0;">
                  <table cellspacing="0" cellpadding="0" style="padding: 0; margin: 0; width: 100%; height: 100%; border-collapse: collapse;">
                    <tr style="padding: 0; margin: 0;">
                      <td>${cuenta.peorAtraso}</td>
                      <td>${cuenta.saldoVencidoPeorAtraso}</td>
                      <td class="text-bellow-text">${cuenta.fechaPeorAtraso}</td>
                    </tr>
                    <tr style="padding: 0; margin: 0;">
                      <td colspan="3">${cuenta.clavePrevencion}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td colspan="5">Historial de Pago [Periodos] Últimos 24 </td>
                <td colspan="12">${cuenta.historicoPagos}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <!-- consultas realizadas -->
      <div class="mt-5">
        <p class="titles">Consultas Realizadas</p>
        <table cellspacing="0" cellpadding="0" class="striped">
          <thead>
            <tr class="table-header">
              <td>Fecha de Consulta</td>
              <td>Otorgante</td>
              <td>Tipo de Crédito</td>
              <td>Monto</td>
              <td>Moneda</td>
            </tr>
          </thead>
          <tbody>
            ${ consultas.map(consulta => `
              <tr>
                <td>${consulta.fechaConsulta}</td>
                <td>${consulta.nombreOtorgante}</td>
                <td>${consulta.tipoCredito}</td>
                <td>${consulta.importeCredito}</td>
                <td>${consulta.claveUnidadMonetaria}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <!-- pie de reporte -->
      <div>
        <p>SIN VALOR EN JUICIO</p>
        <p>DERECHOS RESERVADOS PARA SOCORECAPITAL</p>
        <p>FIN DEL REPORTE</p>
      </div>
    </div>
    `;
  }
  