const configuration = {
  muyBajo: { min: 500, max: 550, base: "Rechazado", bronce: "Autoriza Sólo Base", plata: "Se autoriza base y bronce", oro: "Autorizar", platino: "Autorizar o Incrementar" },
  bajo: { min: 551, max: 600, base: "Rechazado", bronce: "Autoriza Sólo Base", plata: "Se autoriza base y bronce", oro: "Autorizar", platino: "Autorizar o Incrementar" },
  medio: { min: 31, max: 40, base: "Rechazado", bronce: "Autoriza Sólo Base", plata: "Se autoriza base y bronce", oro: "Autorizar", platino: "Autorizar o Incrementar" },
  alto: { min: 41, max: 50, base: "Rechazado", bronce: "Autoriza Sólo Base", plata: "Se autoriza base y bronce", oro: "Autorizar", platino: "Autorizar o Incrementar" },
  muyAlto: { min: 510, max: 1000, base: "Rechazado", bronce: "Autoriza Sólo Base", plata: "Se autoriza base y bronce", oro: "Autorizar", platino: "Autorizar o Incrementar" },
};

const score = 800;
const icc = 8;
//const codigoRazon = "21";
const codigoRazon= "-1"
const codigoRazonScore = [
  "21",
  "31",
  "17"
]

const antiguedad = '24112004';

const reporteData = [
  {
    "fechaActualizacion": "11022025",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "292",
    "fechaAperturaCuenta": "28072023",
    "fechaUltimoPago": "08092023",
    "fechaUltimaCompra": "28072023",
    "fechaReporte": "31012025",
    "modoReportar": "A",
    "creditoMaximo": "4088",
    "saldoActual": "2336+",
    "limiteCredito": "4088",
    "saldoVencido": "2336",
    "formaPagoActual": "96",
    "historicoPagos": "99997777777654321",
    "fechaMasRecienteHistoricoPagos": "31122024",
    "fechaMasAntiguaHistoricoPagos": "31082023",
    "importeSaldoMorosidadHistMasGrave": "0",
    "fechaHistoricaMorosidadMasGrave": "31122024",
    "mopHistoricoMorosidadMasGrave": "09",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "11022025",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "392",
    "fechaAperturaCuenta": "30122024",
    "fechaUltimoPago": "27012025",
    "fechaUltimaCompra": "30122024",
    "fechaReporte": "31012025",
    "modoReportar": "A",
    "creditoMaximo": "5488",
    "saldoActual": "3920+",
    "limiteCredito": "5488",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "1",
    "fechaMasRecienteHistoricoPagos": "31122024",
    "fechaMasAntiguaHistoricoPagos": "31122024",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "11022025",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "442",
    "fechaAperturaCuenta": "27122024",
    "fechaUltimoPago": "30012025",
    "fechaUltimaCompra": "27122024",
    "fechaReporte": "31012025",
    "modoReportar": "A",
    "creditoMaximo": "6188",
    "saldoActual": "3978+",
    "limiteCredito": "6188",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "1",
    "fechaMasRecienteHistoricoPagos": "31122024",
    "fechaMasAntiguaHistoricoPagos": "31122024",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "10012025",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "07102024",
    "fechaUltimoPago": "30122024",
    "fechaUltimaCompra": "07102024",
    "fechaCierreCuenta": "30122024",
    "fechaReporte": "31122024",
    "modoReportar": "A",
    "creditoMaximo": "5488",
    "saldoActual": "0+",
    "limiteCredito": "5488",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "11",
    "fechaMasRecienteHistoricoPagos": "30112024",
    "fechaMasAntiguaHistoricoPagos": "31102024",
    "claveObservacion": "CC",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "13112024",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "05082024",
    "fechaUltimoPago": "07102024",
    "fechaUltimaCompra": "05082024",
    "fechaCierreCuenta": "07102024",
    "fechaReporte": "31102024",
    "modoReportar": "A",
    "creditoMaximo": "5488",
    "saldoActual": "0+",
    "limiteCredito": "5488",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "22",
    "fechaMasRecienteHistoricoPagos": "30092024",
    "fechaMasAntiguaHistoricoPagos": "31082024",
    "claveObservacion": "CC",
    "importeSaldoMorosidadHistMasGrave": "392",
    "fechaHistoricaMorosidadMasGrave": "31082024",
    "mopHistoricoMorosidadMasGrave": "02",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "09092024",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "13052024",
    "fechaUltimoPago": "05082024",
    "fechaUltimaCompra": "13052024",
    "fechaCierreCuenta": "05082024",
    "fechaReporte": "31082024",
    "modoReportar": "A",
    "creditoMaximo": "5488",
    "saldoActual": "0+",
    "limiteCredito": "5488",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "121",
    "fechaMasRecienteHistoricoPagos": "31072024",
    "fechaMasAntiguaHistoricoPagos": "31052024",
    "claveObservacion": "CC",
    "importeSaldoMorosidadHistMasGrave": "392",
    "fechaHistoricaMorosidadMasGrave": "30062024",
    "mopHistoricoMorosidadMasGrave": "02",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "07072024",
    "nombreOtorgante": "BANCO",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "PL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "12",
    "frecuenciaPagos": "V",
    "montoPagar": "816",
    "fechaAperturaCuenta": "31082023",
    "fechaUltimoPago": "07122023",
    "fechaUltimaCompra": "31082023",
    "fechaCierreCuenta": "27062024",
    "fechaReporte": "30062024",
    "modoReportar": "A",
    "creditoMaximo": "7322",
    "saldoActual": "5212+",
    "saldoVencido": "5212",
    "numeroPagosVencidos": "7",
    "formaPagoActual": "97",
    "historicoPagos": "7765432220",
    "fechaMasRecienteHistoricoPagos": "31052024",
    "fechaMasAntiguaHistoricoPagos": "31082023",
    "claveObservacion": "UP",
    "importeSaldoMorosidadHistMasGrave": "0",
    "fechaHistoricaMorosidadMasGrave": "30052024",
    "mopHistoricoMorosidadMasGrave": "07",
    "montoUltimoPago": "500"
  },
  {
    "fechaActualizacion": "11062024",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "26022024",
    "fechaUltimoPago": "13052024",
    "fechaUltimaCompra": "26022024",
    "fechaCierreCuenta": "13052024",
    "fechaReporte": "31052024",
    "modoReportar": "A",
    "creditoMaximo": "4088",
    "saldoActual": "0+",
    "limiteCredito": "4088",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "111",
    "fechaMasRecienteHistoricoPagos": "30042024",
    "fechaMasAntiguaHistoricoPagos": "29022024",
    "claveObservacion": "CC",
    "montoUltimoPago": "0"
  },
  {
    "fechaActualizacion": "27032024",
    "nombreOtorgante": "TIENDA COMERCIAL",
    "identificadorSociedadInformacionCrediticia": "1",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "R",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "0",
    "frecuenciaPagos": "W",
    "montoPagar": "2882",
    "fechaAperturaCuenta": "30112022",
    "fechaUltimaCompra": "30032023",
    "fechaCierreCuenta": "27032024",
    "fechaReporte": "27032024",
    "creditoMaximo": "2882",
    "saldoActual": "2882+",
    "limiteCredito": "2882",
    "saldoVencido": "2882",
    "formaPagoActual": "07",
    "historicoPagos": "UUUUUUU53",
    "fechaMasRecienteHistoricoPagos": "27022024",
    "fechaMasAntiguaHistoricoPagos": "27062023",
    "claveObservacion": "UP",
    "importeSaldoMorosidadHistMasGrave": "2882",
    "fechaHistoricaMorosidadMasGrave": "27032024",
    "mopHistoricoMorosidadMasGrave": "07"
  },
  {
    "fechaActualizacion": "30082023",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "14",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "28042023",
    "fechaUltimoPago": "02062023",
    "fechaUltimaCompra": "28042023",
    "fechaCierreCuenta": "28072023",
    "fechaReporte": "31052023",
    "modoReportar": "A",
    "creditoMaximo": "4200",
    "saldoActual": "0+",
    "limiteCredito": "4200",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "0",
    "fechaMasRecienteHistoricoPagos": "30042023",
    "fechaMasAntiguaHistoricoPagos": "30042023",
    "importeSaldoMorosidadHistMasGrave": "0",
    "fechaHistoricaMorosidadMasGrave": "30042023",
    "mopHistoricoMorosidadMasGrave": "00",
    "montoUltimoPago": "300"
  },
  {
    "fechaActualizacion": "08052023",
    "nombreOtorgante": "FINANCIERA",
    "identificadorSociedadInformacionCrediticia": "0",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "15",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "27012023",
    "fechaUltimoPago": "28042023",
    "fechaUltimaCompra": "28042023",
    "fechaCierreCuenta": "28042023",
    "fechaReporte": "30042023",
    "modoReportar": "A",
    "creditoMaximo": "3000",
    "saldoActual": "0+",
    "limiteCredito": "3000",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "111",
    "fechaMasRecienteHistoricoPagos": "31032023",
    "fechaMasAntiguaHistoricoPagos": "31012023",
    "claveObservacion": "CC",
    "montoUltimoPago": "200"
  },
  {
    "fechaActualizacion": "31102022",
    "nombreOtorgante": "TIENDA COMERCIAL",
    "identificadorSociedadInformacionCrediticia": "1",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "AF",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "12",
    "frecuenciaPagos": "M",
    "montoPagar": "0",
    "fechaAperturaCuenta": "16102017",
    "fechaUltimoPago": "01112022",
    "fechaUltimaCompra": "16102017",
    "fechaCierreCuenta": "01112022",
    "fechaReporte": "31102022",
    "creditoMaximo": "2522",
    "saldoActual": "0+",
    "limiteCredito": "9900",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "99999999999999",
    "fechaMasRecienteHistoricoPagos": "30092022",
    "fechaMasAntiguaHistoricoPagos": "31082021",
    "claveObservacion": "CC",
    "importeSaldoMorosidadHistMasGrave": "2522",
    "fechaHistoricaMorosidadMasGrave": "31012022",
    "mopHistoricoMorosidadMasGrave": "96"
  },
  {
    "fechaActualizacion": "28022022",
    "nombreOtorgante": "TIENDA COMERCIAL",
    "identificadorSociedadInformacionCrediticia": "1",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "R",
    "tipoContrato": "CL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "0",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "25022015",
    "fechaUltimoPago": "31052016",
    "fechaUltimaCompra": "22052015",
    "fechaCierreCuenta": "28022022",
    "fechaReporte": "28022022",
    "creditoMaximo": "0",
    "saldoActual": "0+",
    "limiteCredito": "568",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "1UUUUUU",
    "fechaMasRecienteHistoricoPagos": "28012022",
    "fechaMasAntiguaHistoricoPagos": "28072021"
  },
  {
    "fechaActualizacion": "31072014",
    "nombreOtorgante": "MICROFINANCIERA",
    "identificadorSociedadInformacionCrediticia": "1",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "PL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "20",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "13022014",
    "fechaUltimoPago": "31072014",
    "fechaUltimaCompra": "13022014",
    "fechaCierreCuenta": "31072014",
    "fechaReporte": "31072014",
    "creditoMaximo": "56643",
    "saldoActual": "0+",
    "limiteCredito": "0",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "UUUU",
    "fechaMasRecienteHistoricoPagos": "30062014",
    "fechaMasAntiguaHistoricoPagos": "31032014",
    "claveObservacion": "CC"
  },
  {
    "fechaActualizacion": "28022014",
    "nombreOtorgante": "MICROFINANCIERA",
    "identificadorSociedadInformacionCrediticia": "1",
    "indicadorTipoResponsabilidad": "I",
    "tipoCuenta": "I",
    "tipoContrato": "PL",
    "claveUnidadMonetaria": "MX",
    "numeroPagos": "16",
    "frecuenciaPagos": "W",
    "montoPagar": "0",
    "fechaAperturaCuenta": "18102013",
    "fechaUltimoPago": "28022014",
    "fechaUltimaCompra": "18102013",
    "fechaCierreCuenta": "28022014",
    "fechaReporte": "28022014",
    "creditoMaximo": "35015",
    "saldoActual": "0+",
    "limiteCredito": "0",
    "saldoVencido": "0",
    "formaPagoActual": "01",
    "historicoPagos": "1UU",
    "fechaMasRecienteHistoricoPagos": "28012014",
    "fechaMasAntiguaHistoricoPagos": "28112013",
    "claveObservacion": "CC"
  }
]
// const reporteData = [
//   {
//     "fechaActualizacion": "24012025",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "20",
//     "frecuenciaPagos": "W",
//     "montoPagar": "743",
//     "fechaAperturaCuenta": "17122024",
//     "fechaUltimoPago": "21012025",
//     "fechaUltimaCompra": "17122024",
//     "fechaReporte": "24012025",
//     "creditoMaximo": "12000",
//     "saldoActual": "9444+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1",
//     "fechaMasRecienteHistoricoPagos": "24122024",
//     "fechaMasAntiguaHistoricoPagos": "24122024"
//   },
//   {
//     "fechaActualizacion": "12012025",
//     "nombreOtorgante": "COOPERATIVA",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "J",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "8",
//     "frecuenciaPagos": "K",
//     "montoPagar": "334",
//     "fechaAperturaCuenta": "16032022",
//     "fechaUltimoPago": "30052022",
//     "fechaUltimaCompra": "16032022",
//     "fechaReporte": "31122024",
//     "modoReportar": "A",
//     "creditoMaximo": "3000",
//     "saldoActual": "5767+",
//     "limiteCredito": "3000",
//     "saldoVencido": "5767",
//     "formaPagoActual": "97",
//     "historicoPagos": "999999999X99999999999977",
//     "fechaMasRecienteHistoricoPagos": "30112024",
//     "fechaMasAntiguaHistoricoPagos": "31032022",
//     "importeSaldoMorosidadHistMasGrave": "5767",
//     "fechaHistoricaMorosidadMasGrave": "28022023",
//     "mopHistoricoMorosidadMasGrave": "97",
//     "montoUltimoPago": "300"
//   },
//   {
//     "fechaActualizacion": "31122024",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "8",
//     "frecuenciaPagos": "K",
//     "montoPagar": "737",
//     "fechaAperturaCuenta": "09042024",
//     "fechaUltimoPago": "02082024",
//     "fechaUltimaCompra": "09042024",
//     "fechaReporte": "31122024",
//     "creditoMaximo": "5000",
//     "saldoActual": "2450+",
//     "limiteCredito": "0",
//     "saldoVencido": "2450",
//     "formaPagoActual": "05",
//     "historicoPagos": "UUUUU21",
//     "fechaMasRecienteHistoricoPagos": "30112024",
//     "fechaMasAntiguaHistoricoPagos": "31052024",
//     "importeSaldoMorosidadHistMasGrave": "3439",
//     "fechaHistoricaMorosidadMasGrave": "31072024",
//     "mopHistoricoMorosidadMasGrave": "05"
//   },
//   {
//     "fechaActualizacion": "31122024",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "1",
//     "frecuenciaPagos": "M",
//     "montoPagar": "1044",
//     "fechaAperturaCuenta": "02012024",
//     "fechaUltimaCompra": "02012024",
//     "fechaReporte": "31122024",
//     "creditoMaximo": "900",
//     "saldoActual": "1173+",
//     "limiteCredito": "900",
//     "saldoVencido": "1173",
//     "formaPagoActual": "07",
//     "historicoPagos": "77776",
//     "fechaMasRecienteHistoricoPagos": "30112024",
//     "fechaMasAntiguaHistoricoPagos": "31072024",
//     "importeSaldoMorosidadHistMasGrave": "1173",
//     "fechaHistoricaMorosidadMasGrave": "31122024",
//     "mopHistoricoMorosidadMasGrave": "07"
//   },
//   {
//     "fechaActualizacion": "31122024",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "M",
//     "montoPagar": "5314",
//     "fechaAperturaCuenta": "30092020",
//     "fechaUltimoPago": "27012021",
//     "fechaUltimaCompra": "30092020",
//     "fechaReporte": "31122024",
//     "creditoMaximo": "129772",
//     "saldoActual": "5314+",
//     "limiteCredito": "0",
//     "saldoVencido": "5314",
//     "formaPagoActual": "02",
//     "historicoPagos": "2222UUUUUUU22222222222",
//     "fechaMasRecienteHistoricoPagos": "30112024",
//     "fechaMasAntiguaHistoricoPagos": "28022023",
//     "importeSaldoMorosidadHistMasGrave": "5314",
//     "fechaHistoricaMorosidadMasGrave": "31012021",
//     "mopHistoricoMorosidadMasGrave": "02"
//   },
//   {
//     "fechaActualizacion": "31122024",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "20",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "30072024",
//     "fechaUltimoPago": "16122024",
//     "fechaUltimaCompra": "30072024",
//     "fechaCierreCuenta": "16122024",
//     "fechaReporte": "31122024",
//     "creditoMaximo": "10000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "30112024",
//     "fechaMasAntiguaHistoricoPagos": "31082024"
//   },
//   {
//     "fechaActualizacion": "31122024",
//     "nombreOtorgante": "SERVICIOS",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "O",
//     "tipoContrato": "CL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "0",
//     "frecuenciaPagos": "B",
//     "montoPagar": "2355",
//     "fechaAperturaCuenta": "20072016",
//     "fechaUltimoPago": "10092024",
//     "fechaUltimaCompra": "31122024",
//     "fechaReporte": "31122024",
//     "creditoMaximo": "2355",
//     "saldoActual": "2355+",
//     "limiteCredito": "2355",
//     "saldoVencido": "2355",
//     "formaPagoActual": "96",
//     "historicoPagos": "U9UUUUUUU7UUU9UUUUUUUUU",
//     "fechaMasRecienteHistoricoPagos": "30112024",
//     "fechaMasAntiguaHistoricoPagos": "31012023",
//     "importeSaldoMorosidadHistMasGrave": "2355",
//     "fechaHistoricaMorosidadMasGrave": "30112024",
//     "mopHistoricoMorosidadMasGrave": "96"
//   },
//   {
//     "fechaActualizacion": "30112024",
//     "nombreOtorgante": "MICROFINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "8",
//     "frecuenciaPagos": "K",
//     "montoPagar": "5767",
//     "fechaAperturaCuenta": "16032022",
//     "fechaUltimoPago": "30052022",
//     "fechaUltimaCompra": "16032022",
//     "fechaReporte": "30112024",
//     "creditoMaximo": "3000",
//     "saldoActual": "5767+",
//     "limiteCredito": "3000",
//     "saldoVencido": "5767",
//     "formaPagoActual": "04",
//     "historicoPagos": "UUUUU44U444UUUUU44444",
//     "fechaMasRecienteHistoricoPagos": "30102024",
//     "fechaMasAntiguaHistoricoPagos": "28022023",
//     "claveObservacion": "UP",
//     "importeSaldoMorosidadHistMasGrave": "5767",
//     "fechaHistoricaMorosidadMasGrave": "28022023",
//     "mopHistoricoMorosidadMasGrave": "04"
//   },
//   {
//     "fechaActualizacion": "23102024",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "V",
//     "montoPagar": "542",
//     "fechaAperturaCuenta": "09012024",
//     "fechaUltimoPago": "08022024",
//     "fechaUltimaCompra": "09012024",
//     "fechaCierreCuenta": "27092024",
//     "fechaReporte": "30092024",
//     "modoReportar": "A",
//     "creditoMaximo": "7367",
//     "saldoActual": "6504+",
//     "saldoVencido": "6504",
//     "numeroPagosVencidos": "12",
//     "formaPagoActual": "97",
//     "historicoPagos": "77654321",
//     "fechaMasRecienteHistoricoPagos": "31082024",
//     "fechaMasAntiguaHistoricoPagos": "31012024",
//     "claveObservacion": "UP",
//     "importeSaldoMorosidadHistMasGrave": "6504",
//     "fechaHistoricaMorosidadMasGrave": "31052024",
//     "mopHistoricoMorosidadMasGrave": "05",
//     "montoUltimoPago": "542"
//   },
//   {
//     "fechaActualizacion": "31072024",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "23042024",
//     "fechaUltimoPago": "30072024",
//     "fechaUltimaCompra": "23042024",
//     "fechaCierreCuenta": "30072024",
//     "fechaReporte": "31072024",
//     "creditoMaximo": "5000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "11",
//     "fechaMasRecienteHistoricoPagos": "30062024",
//     "fechaMasAntiguaHistoricoPagos": "31052024"
//   },
//   {
//     "fechaActualizacion": "12012024",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "V",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "19092023",
//     "fechaUltimoPago": "09012024",
//     "fechaUltimaCompra": "19092023",
//     "fechaCierreCuenta": "09012024",
//     "fechaReporte": "11012024",
//     "modoReportar": "A",
//     "creditoMaximo": "7585",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "31122023",
//     "fechaMasAntiguaHistoricoPagos": "30092023",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "558"
//   },
//   {
//     "fechaActualizacion": "17092023",
//     "nombreOtorgante": "SERVICIOS",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "O",
//     "tipoContrato": "MI",
//     "claveUnidadMonetaria": "MX",
//     "frecuenciaPagos": "Z",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "29092015",
//     "fechaUltimoPago": "02012016",
//     "fechaUltimaCompra": "02012016",
//     "fechaCierreCuenta": "31072023",
//     "fechaReporte": "31072023",
//     "modoReportar": "M",
//     "creditoMaximo": "0",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111111111111111111111111",
//     "fechaMasRecienteHistoricoPagos": "30062023",
//     "fechaMasAntiguaHistoricoPagos": "28022019",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "169"
//   },
//   {
//     "fechaActualizacion": "31052023",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "31012023",
//     "fechaUltimoPago": "22052023",
//     "fechaUltimaCompra": "31012023",
//     "fechaCierreCuenta": "22052023",
//     "fechaReporte": "31052023",
//     "creditoMaximo": "8000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30042023",
//     "fechaMasAntiguaHistoricoPagos": "28022023"
//   },
//   {
//     "fechaActualizacion": "19022023",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "V",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "24102022",
//     "fechaUltimoPago": "15022023",
//     "fechaUltimaCompra": "24102022",
//     "fechaCierreCuenta": "16022023",
//     "fechaReporte": "16022023",
//     "modoReportar": "A",
//     "creditoMaximo": "6348",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "numeroPagosVencidos": "1",
//     "formaPagoActual": "01",
//     "historicoPagos": "122110",
//     "fechaMasRecienteHistoricoPagos": "02012023",
//     "fechaMasAntiguaHistoricoPagos": "02082022",
//     "claveObservacion": "CC",
//     "importeSaldoMorosidadHistMasGrave": "462",
//     "fechaHistoricaMorosidadMasGrave": "31122022",
//     "mopHistoricoMorosidadMasGrave": "02",
//     "montoUltimoPago": "462"
//   },
//   {
//     "fechaActualizacion": "31012023",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "18102022",
//     "fechaUltimoPago": "30012023",
//     "fechaUltimaCompra": "18102022",
//     "fechaCierreCuenta": "30012023",
//     "fechaReporte": "31012023",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "31122022",
//     "fechaMasAntiguaHistoricoPagos": "31102022"
//   },
//   {
//     "fechaActualizacion": "31102022",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "28062022",
//     "fechaUltimoPago": "17102022",
//     "fechaUltimaCompra": "28062022",
//     "fechaCierreCuenta": "17102022",
//     "fechaReporte": "31102022",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30092022",
//     "fechaMasAntiguaHistoricoPagos": "31072022"
//   },
//   {
//     "fechaActualizacion": "10082022",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "10",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "23032022",
//     "fechaUltimoPago": "06082022",
//     "fechaUltimaCompra": "06082022",
//     "fechaCierreCuenta": "06082022",
//     "fechaReporte": "31072022",
//     "modoReportar": "A",
//     "creditoMaximo": "3900",
//     "saldoActual": "0+",
//     "limiteCredito": "3900",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "2111",
//     "fechaMasRecienteHistoricoPagos": "30062022",
//     "fechaMasAntiguaHistoricoPagos": "30032022",
//     "claveObservacion": "CC",
//     "importeSaldoMorosidadHistMasGrave": "570",
//     "fechaHistoricaMorosidadMasGrave": "30062022",
//     "mopHistoricoMorosidadMasGrave": "02",
//     "montoUltimoPago": "70"
//   },
//   {
//     "fechaActualizacion": "30062022",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "08032022",
//     "fechaUltimoPago": "27062022",
//     "fechaUltimaCompra": "08032022",
//     "fechaCierreCuenta": "27062022",
//     "fechaReporte": "30062022",
//     "creditoMaximo": "5000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30052022",
//     "fechaMasAntiguaHistoricoPagos": "30032022"
//   },
//   {
//     "fechaActualizacion": "06042022",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "10",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "07012022",
//     "fechaUltimoPago": "16032022",
//     "fechaUltimaCompra": "16032022",
//     "fechaCierreCuenta": "16032022",
//     "fechaReporte": "31032022",
//     "modoReportar": "A",
//     "creditoMaximo": "3900",
//     "saldoActual": "0+",
//     "limiteCredito": "3900",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "11",
//     "fechaMasRecienteHistoricoPagos": "28022022",
//     "fechaMasAntiguaHistoricoPagos": "28012022",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "380"
//   },
//   {
//     "fechaActualizacion": "31032022",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "16112021",
//     "fechaUltimoPago": "07032022",
//     "fechaUltimaCompra": "16112021",
//     "fechaCierreCuenta": "07032022",
//     "fechaReporte": "31032022",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "28022022",
//     "fechaMasAntiguaHistoricoPagos": "30112021"
//   },
//   {
//     "fechaActualizacion": "10012022",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "01102021",
//     "fechaUltimoPago": "07012022",
//     "fechaUltimaCompra": "07012022",
//     "fechaCierreCuenta": "07012022",
//     "fechaReporte": "07012022",
//     "modoReportar": "A",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "07122021",
//     "fechaMasAntiguaHistoricoPagos": "07102021",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "227"
//   },
//   {
//     "fechaActualizacion": "30112021",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "27072021",
//     "fechaUltimoPago": "15112021",
//     "fechaUltimaCompra": "27072021",
//     "fechaCierreCuenta": "15112021",
//     "fechaReporte": "30112021",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30102021",
//     "fechaMasAntiguaHistoricoPagos": "30082021"
//   },
//   {
//     "fechaActualizacion": "31072021",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "06042021",
//     "fechaUltimoPago": "26072021",
//     "fechaUltimaCompra": "06042021",
//     "fechaCierreCuenta": "26072021",
//     "fechaReporte": "31072021",
//     "creditoMaximo": "5500",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30062021",
//     "fechaMasAntiguaHistoricoPagos": "30042021"
//   },
//   {
//     "fechaActualizacion": "30042021",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "14122020",
//     "fechaUltimoPago": "05042021",
//     "fechaUltimaCompra": "14122020",
//     "fechaCierreCuenta": "05042021",
//     "fechaReporte": "30042021",
//     "creditoMaximo": "11000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "30032021",
//     "fechaMasAntiguaHistoricoPagos": "30122020"
//   },
//   {
//     "fechaActualizacion": "31122020",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "24082020",
//     "fechaUltimoPago": "11122020",
//     "fechaUltimaCompra": "24082020",
//     "fechaCierreCuenta": "11122020",
//     "fechaReporte": "31122020",
//     "creditoMaximo": "12000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30112020",
//     "fechaMasAntiguaHistoricoPagos": "30092020"
//   },
//   {
//     "fechaActualizacion": "21122020",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "11112019",
//     "fechaUltimoPago": "27022020",
//     "fechaUltimaCompra": "11112019",
//     "fechaCierreCuenta": "27022020",
//     "fechaReporte": "21122020",
//     "creditoMaximo": "12000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "UUUUUUUUU1111",
//     "fechaMasRecienteHistoricoPagos": "21112020",
//     "fechaMasAntiguaHistoricoPagos": "21112019"
//   },
//   {
//     "fechaActualizacion": "31102020",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "M",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "18062020",
//     "fechaUltimoPago": "30092020",
//     "fechaUltimaCompra": "18062020",
//     "fechaCierreCuenta": "31102020",
//     "fechaReporte": "31102020",
//     "creditoMaximo": "129772",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30092020",
//     "fechaMasAntiguaHistoricoPagos": "31072020",
//     "claveObservacion": "CC"
//   },
//   {
//     "fechaActualizacion": "05062020",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "V",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "12022020",
//     "fechaUltimoPago": "01062020",
//     "fechaUltimaCompra": "12022020",
//     "fechaCierreCuenta": "03062020",
//     "fechaReporte": "04062020",
//     "modoReportar": "A",
//     "creditoMaximo": "5152",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "04052020",
//     "fechaMasAntiguaHistoricoPagos": "29022020",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "375"
//   },
//   {
//     "fechaActualizacion": "30042020",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "02032020",
//     "fechaUltimoPago": "29042020",
//     "fechaUltimaCompra": "02032020",
//     "fechaCierreCuenta": "29042020",
//     "fechaReporte": "30042020",
//     "creditoMaximo": "12000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1",
//     "fechaMasRecienteHistoricoPagos": "30032020",
//     "fechaMasAntiguaHistoricoPagos": "30032020",
//     "fechaHistoricaMorosidadMasGrave": "16042020",
//     "mopHistoricoMorosidadMasGrave": "02"
//   },
//   {
//     "fechaActualizacion": "09032020",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "21112019",
//     "fechaUltimoPago": "05032020",
//     "fechaUltimaCompra": "05032020",
//     "fechaCierreCuenta": "05032020",
//     "fechaReporte": "06032020",
//     "modoReportar": "A",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "06022020",
//     "fechaMasAntiguaHistoricoPagos": "06112019",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "293"
//   },
//   {
//     "fechaActualizacion": "11022020",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "0",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "21102019",
//     "fechaUltimoPago": "10022020",
//     "fechaUltimaCompra": "21102019",
//     "fechaCierreCuenta": "10022020",
//     "fechaReporte": "10022020",
//     "modoReportar": "A",
//     "creditoMaximo": "5166",
//     "saldoActual": "0+",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "06012020",
//     "fechaMasAntiguaHistoricoPagos": "31102019",
//     "claveObservacion": "CC",
//     "montoUltimoPago": "376"
//   },
//   {
//     "fechaActualizacion": "30112019",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "22072019",
//     "fechaUltimoPago": "07112019",
//     "fechaUltimaCompra": "22072019",
//     "fechaCierreCuenta": "07112019",
//     "fechaReporte": "30112019",
//     "creditoMaximo": "8000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "30102019",
//     "fechaMasAntiguaHistoricoPagos": "30072019"
//   },
//   {
//     "fechaActualizacion": "31072019",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "01042019",
//     "fechaUltimoPago": "18072019",
//     "fechaUltimaCompra": "01042019",
//     "fechaCierreCuenta": "18072019",
//     "fechaReporte": "31072019",
//     "creditoMaximo": "8000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30062019",
//     "fechaMasAntiguaHistoricoPagos": "30042019"
//   },
//   {
//     "fechaActualizacion": "31032019",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "10122018",
//     "fechaUltimoPago": "28032019",
//     "fechaUltimaCompra": "10122018",
//     "fechaCierreCuenta": "28032019",
//     "fechaReporte": "31032019",
//     "creditoMaximo": "6000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "28022019",
//     "fechaMasAntiguaHistoricoPagos": "31122018"
//   },
//   {
//     "fechaActualizacion": "31122018",
//     "nombreOtorgante": "FINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "27082018",
//     "fechaUltimoPago": "06122018",
//     "fechaUltimaCompra": "27082018",
//     "fechaCierreCuenta": "06122018",
//     "fechaReporte": "31122018",
//     "creditoMaximo": "2500",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "30112018",
//     "fechaMasAntiguaHistoricoPagos": "30092018"
//   },
//   {
//     "fechaActualizacion": "31082018",
//     "nombreOtorgante": "TIENDA COMERCIAL",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "06042018",
//     "fechaUltimoPago": "31082018",
//     "fechaUltimaCompra": "06042018",
//     "fechaCierreCuenta": "31082018",
//     "fechaReporte": "31082018",
//     "creditoMaximo": "8000",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "UUU",
//     "fechaMasRecienteHistoricoPagos": "31072018",
//     "fechaMasAntiguaHistoricoPagos": "31052018"
//   },
//   {
//     "fechaActualizacion": "31082017",
//     "nombreOtorgante": "MICROFINANCIERA",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "10",
//     "frecuenciaPagos": "K",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "27032017",
//     "fechaUltimoPago": "04082017",
//     "fechaUltimaCompra": "27032017",
//     "fechaCierreCuenta": "04082017",
//     "fechaReporte": "31082017",
//     "creditoMaximo": "33191",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "UUUU",
//     "fechaMasRecienteHistoricoPagos": "31072017",
//     "fechaMasAntiguaHistoricoPagos": "30042017",
//     "claveObservacion": "CC"
//   },
//   {
//     "fechaActualizacion": "18122013",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "20082013",
//     "fechaUltimoPago": "10122013",
//     "fechaUltimaCompra": "20082013",
//     "fechaCierreCuenta": "11122013",
//     "fechaReporte": "18122013",
//     "creditoMaximo": "5066",
//     "saldoActual": "0+",
//     "limiteCredito": "5066",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "18112013",
//     "fechaMasAntiguaHistoricoPagos": "18082013",
//     "claveObservacion": "CC"
//   },
//   {
//     "fechaActualizacion": "21082013",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "25042013",
//     "fechaUltimoPago": "15082013",
//     "fechaUltimaCompra": "25042013",
//     "fechaCierreCuenta": "16082013",
//     "fechaReporte": "21082013",
//     "creditoMaximo": "4000",
//     "saldoActual": "0+",
//     "limiteCredito": "4000",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "111",
//     "fechaMasRecienteHistoricoPagos": "21072013",
//     "fechaMasAntiguaHistoricoPagos": "21052013",
//     "claveObservacion": "CC"
//   },
//   {
//     "fechaActualizacion": "12062013",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "26022013",
//     "fechaUltimoPago": "11062013",
//     "fechaUltimaCompra": "26022013",
//     "fechaCierreCuenta": "11062013",
//     "fechaReporte": "12062013",
//     "creditoMaximo": "4160",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "U111",
//     "fechaMasRecienteHistoricoPagos": "12052013",
//     "fechaMasAntiguaHistoricoPagos": "12022013"
//   },
//   {
//     "fechaActualizacion": "03042013",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "06122012",
//     "fechaUltimoPago": "31032013",
//     "fechaUltimaCompra": "06122012",
//     "fechaCierreCuenta": "01042013",
//     "fechaReporte": "03042013",
//     "creditoMaximo": "3557",
//     "saldoActual": "0+",
//     "limiteCredito": "3557",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "03032013",
//     "fechaMasAntiguaHistoricoPagos": "03122012",
//     "claveObservacion": "CC"
//   },
//   {
//     "fechaActualizacion": "27022013",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "08112012",
//     "fechaUltimoPago": "25022013",
//     "fechaUltimaCompra": "08112012",
//     "fechaCierreCuenta": "25022013",
//     "fechaReporte": "27022013",
//     "creditoMaximo": "5160",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "U11",
//     "fechaMasRecienteHistoricoPagos": "27012013",
//     "fechaMasAntiguaHistoricoPagos": "27112012"
//   },
//   {
//     "fechaActualizacion": "12122012",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "16082012",
//     "fechaUltimoPago": "06122012",
//     "fechaUltimaCompra": "16082012",
//     "fechaCierreCuenta": "07122012",
//     "fechaReporte": "12122012",
//     "creditoMaximo": "3003",
//     "saldoActual": "0+",
//     "limiteCredito": "3003",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1111",
//     "fechaMasRecienteHistoricoPagos": "12112012",
//     "fechaMasAntiguaHistoricoPagos": "12082012",
//     "claveObservacion": "CC"
//   },
//   {
//     "fechaActualizacion": "31102012",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "CT",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "25072012",
//     "fechaUltimoPago": "31102012",
//     "fechaUltimaCompra": "25072012",
//     "fechaCierreCuenta": "31102012",
//     "fechaReporte": "31102012",
//     "creditoMaximo": "5160",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "UUU",
//     "fechaMasRecienteHistoricoPagos": "30092012",
//     "fechaMasAntiguaHistoricoPagos": "31072012"
//   },
//   {
//     "fechaActualizacion": "01082012",
//     "nombreOtorgante": "BANCO",
//     "identificadorSociedadInformacionCrediticia": "1",
//     "indicadorTipoResponsabilidad": "I",
//     "tipoCuenta": "I",
//     "tipoContrato": "PL",
//     "claveUnidadMonetaria": "MX",
//     "numeroPagos": "16",
//     "frecuenciaPagos": "W",
//     "montoPagar": "0",
//     "fechaAperturaCuenta": "09042012",
//     "fechaUltimoPago": "01082012",
//     "fechaUltimaCompra": "09042012",
//     "fechaCierreCuenta": "01082012",
//     "fechaReporte": "01082012",
//     "creditoMaximo": "10005",
//     "saldoActual": "0+",
//     "limiteCredito": "0",
//     "saldoVencido": "0",
//     "formaPagoActual": "01",
//     "historicoPagos": "1U1U",
//     "fechaMasRecienteHistoricoPagos": "01072012",
//     "fechaMasAntiguaHistoricoPagos": "01042012"
//   }
// ]

consultas = [
  {
    "fechaConsulta": "30012025",
    "identificacionBuro": "0000",
    "nombreOtorgante": "BURO DE CREDITO ",
    "telefonoOtorgante": "54494832",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000000000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "30012025",
    "claveOtorgante": "FF60791003",
    "nombreOtorgante": "FINANCIALMERC",
    "tipoContrato": "CC",
    "importeContrato": "0",
    "indicadorTipoResponsabilidad": "I",
    "identificadorOrigenConsulta": "0"
  },
  {
    "fechaConsulta": "14012025",
    "identificacionBuro": "0000",
    "nombreOtorgante": "BURO DE CREDITO ",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000000000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "14012025",
    "claveOtorgante": "FF60791003",
    "nombreOtorgante": "FINANCIALMERC",
    "tipoContrato": "CC",
    "importeContrato": "0",
    "indicadorTipoResponsabilidad": "I",
    "identificadorOrigenConsulta": "0"
  },
  {
    "fechaConsulta": "17122024",
    "identificacionBuro": "0000",
    "nombreOtorgante": "SOCIEDAD FINANCI",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000015000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "22042024",
    "identificacionBuro": "0000",
    "nombreOtorgante": "SOCIEDAD FINANCI",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000005000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "08042024",
    "identificacionBuro": "0000",
    "nombreOtorgante": "SIC",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000000000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "08042024",
    "nombreOtorgante": "CONSUMIDOR FINAL",
    "tipoContrato": "UK",
    "importeContrato": "0",
    "indicadorTipoResponsabilidad": "I",
    "identificadorOrigenConsulta": "0"
  },
  {
    "fechaConsulta": "13012024",
    "identificacionBuro": "0000",
    "nombreOtorgante": "BURO DE CREDITO ",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000000000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "13012024",
    "nombreOtorgante": "FINANCIERA",
    "tipoContrato": "CC",
    "importeContrato": "0",
    "indicadorTipoResponsabilidad": "I",
    "identificadorOrigenConsulta": "0"
  },
  {
    "fechaConsulta": "02012024",
    "identificacionBuro": "0000",
    "nombreOtorgante": "BANCOS",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000000000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "02012024",
    "nombreOtorgante": "SIC",
    "tipoContrato": "PL",
    "importeContrato": "0",
    "indicadorTipoResponsabilidad": "I",
    "identificadorOrigenConsulta": "0"
  },
  {
    "fechaConsulta": "08092023",
    "identificacionBuro": "0000",
    "nombreOtorgante": "BANCOS",
    "tipoContrato": "CC",
    "claveUnidadMonetaria": "MX",
    "importeContrato": "000000000",
    "identificadorOrigenConsulta": "1"
  },
  {
    "fechaConsulta": "08092023",
    "nombreOtorgante": "SIC",
    "tipoContrato": "PL",
    "importeContrato": "0",
    "indicadorTipoResponsabilidad": "I",
    "identificadorOrigenConsulta": "0"
  }
]

 const mensajesBD = [
  {
    "fechaReporte": "30012025",
    "codigoClave": "850",
    "tipoInstitucion": "BURO DE CREDITO ",
    "mensaje": "TELEFONO 9621640112 NO CORRESPONDE A ZONA POSTAL"
  },
  {
    "fechaReporte": "30012025",
    "codigoClave": "850",
    "tipoInstitucion": "BURO DE CREDITO ",
    "mensaje": "TELEFONO 9621334838 NO CORRESPONDE A ZONA POSTAL"
  },
  {
    "fechaReporte": "30012025",
    "codigoClave": "870",
    "tipoInstitucion": "BURO DE CREDITO ",
    "mensaje": "TELEFONO 9621640112 CORRESPONDE A NUMERO MOVIL"
  },
  {
    "fechaReporte": "30012025",
    "codigoClave": "870",
    "tipoInstitucion": "BURO DE CREDITO ",
    "mensaje": "TELEFONO 9621334838 CORRESPONDE A NUMERO MOVIL"
  },
  {
    "fechaReporte": "30012025",
    "codigoClave": "850",
    "tipoInstitucion": "BURO DE CREDITO ",
    "mensaje": "TELEFONO 9622052769 NO CORRESPONDE A ZONA POSTAL"
  },
  {
    "fechaReporte": "30012025",
    "codigoClave": "870",
    "tipoInstitucion": "BURO DE CREDITO ",
    "mensaje": "TELEFONO 9622052769 CORRESPONDE A NUMERO MOVIL"
  }
]

function obtenerCodigosRazon (codigoRazonScore){
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
const codigosEncontrados = [];

  if (codigoRazonScore && Array.isArray(codigoRazonScore)) {
    codigoRazonScore.forEach(codigo => {
      const descripcion = CODIGOS_RAZON[codigo] || 'Descripción no disponible';
      codigosEncontrados.push(`${descripcion}`);
    });
  }

  return codigosEncontrados.length > 0 ? codigosEncontrados : ['No se encontraron códigos de razón válidos.'];
}


function getTipoContrato(tipoContrato) {
  const tipos = {
      'AF': 'Aparatos/Muebles', 'AG': 'Agropecuario (PFAE)', 'AL': 'Arrendamiento Automotriz', 'AP': 'Aviación',
      'AU': 'Compra de Automóvil', 'BD': 'Fianza', 'BT': 'Bote / Lancha', 'CC': 'Tarjeta de Crédito',
      'CE': 'Cartas de Crédito (PFAE)', 'CF': 'Crédito fiscal', 'CL': 'Línea de Crédito', 'CO': 'Consolidación',
      'CS': 'Crédito Simple (PFAE)', 'CT': 'Con Colateral (PFAE)', 'DE': 'Descuentos (PFAE)', 'EQ': 'Equipo',
      'FI': 'Fideicomiso (PFAE)', 'FT': 'Factoraje', 'HA': 'Habilitación o Avío (PFAE)', 'HE': 'Préstamo tipo "Home Equity"',
      'HI': 'Mejoras a la casa', 'LS': 'Arrendamiento', 'LR': 'Línea de Crédito Reinstalable', 'MI': 'Otros',
      'OA': 'Otros adeudos vencidos (PFAE)', 'PA': 'Préstamo para Personas Físicas con Actividad Empresarial (PFAE)',
      'PB': 'Editorial', 'PG': 'PGUE - Préstamo como garantía de unidades industriales para PFAE', 'PL': 'Préstamo personal',
      'PN': 'Préstamo de nómina', 'PQ': 'Quirografario (PFAE)', 'PR': 'Prendario (PFAE)', 'PS': 'Pago de Servicios',
      'RC': 'Reestructurado (PFAE)', 'RD': 'Redescuento (PFAE)', 'RE': 'Bienes Raíces', 'RF': 'Refaccionario (PFAE)',
      'RN': 'Renovado (PFAE)', 'RV': 'Vehículo Recreativo', 'SC': 'Tarjeta garantizada', 'SE': 'Préstamo garantizado',
      'SG': 'Seguros', 'SM': 'Segunda hipoteca', 'ST': 'Préstamo para estudiante', 'TE': 'Tarjeta de Crédito Empresarial',
      'UK': 'Desconocido', 'US': 'Préstamo no garantizado'
  };
  return tipos[tipoContrato] || 'Desconocido';
}
function getDescripcionMOP(mop) {
  const mopDescriptions = {
      "UR": "Cuenta sin información.",
      "00": "Muy reciente para ser calificada.",
      "01": "Cuenta al corriente, 0 días de atraso.",
      "02": "Cuenta con atraso de 1 a 29 días.",
      "03": "Cuenta con atraso de 30 a 59 días.",
      "04": "Cuenta con atraso de 60 a 89 días.",
      "05": "Cuenta con atraso de 90 a 119 días.",
      "06": "Cuenta con atraso de 120 a 149 días.",
      "07": "Cuenta con atraso de 150 días hasta 12 meses.",
      "96": "Cuenta con atraso de más de 12 meses.",
      "97": "Cuenta con deuda parcial o total sin recuperar.",
      "99": "Fraude cometido por el Cliente."
  };
  return mopDescriptions[mop] || "Código MOP desconocido";
}

function obtenerPeorMorosidad(reporteData) {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  const mesActual = String(fechaActual.getMonth() + 1).padStart(2, '0');
  const diaActual = String(fechaActual.getDate()).padStart(2, '0');
  const fechaLimite = `${añoActual - 1}${mesActual}${diaActual}`; // Hace 12 meses en formato aaaammdd

  let peorMorosidadUltimos12Meses = null;
  let morosidadMasReciente = null;

  reporteData.forEach(cuenta => {
    if (cuenta.fechaHistoricaMorosidadMasGrave && cuenta.mopHistoricoMorosidadMasGrave) {
      const fechaMorosidad = cuenta.fechaHistoricaMorosidadMasGrave; // Mantenerla en formato original
      const mop = cuenta.mopHistoricoMorosidadMasGrave;
      const tipoCredito = getTipoContrato(cuenta.tipoContrato);
      const descripcionMOP = getDescripcionMOP(mop);

      // 🔹 Comparación correcta de fechas
      if (convertirFechaAFormatoYYYYMMDD(fechaMorosidad) >= fechaLimite) {
        if (!peorMorosidadUltimos12Meses || mop > peorMorosidadUltimos12Meses.mop) {
          peorMorosidadUltimos12Meses = {
            fecha: fechaMorosidad,
            mop: mop,
            descripcionMOP: descripcionMOP,
            cuenta: cuenta.nombreOtorgante,
            tipoCredito: tipoCredito
          };
        }
      }

      // 🔹 Buscar la morosidad más reciente
      if (!morosidadMasReciente || convertirFechaAFormatoYYYYMMDD(fechaMorosidad) > convertirFechaAFormatoYYYYMMDD(morosidadMasReciente.fecha)) {
        morosidadMasReciente = {
          fecha: fechaMorosidad,
          mop: mop,
          descripcionMOP: descripcionMOP,
          cuenta: cuenta.nombreOtorgante,
          tipoCredito: tipoCredito
        };
      }
    }
  });

  // 🔹 Formatear fechas al final para mostrarlas como dd-MM-yyyy
  return {
    peorMorosidadUltimos12Meses: peorMorosidadUltimos12Meses
      ? {
          ...peorMorosidadUltimos12Meses,
          fecha: formatearFechaDDMMYYYY(peorMorosidadUltimos12Meses.fecha)
        }
      : "No se encontró morosidad en los últimos 12 meses",
    morosidadMasReciente: morosidadMasReciente
      ? {
          ...morosidadMasReciente,
          fecha: formatearFechaDDMMYYYY(morosidadMasReciente.fecha)
        }
      : "No hay morosidad registrada"
  };
}

// 🔹 Función para convertir fecha ddmmaaaa a aaaammdd
function convertirFechaAFormatoYYYYMMDD(fecha) {
  const dia = fecha.slice(0, 2);
  const mes = fecha.slice(2, 4);
  const año = fecha.slice(4);
  return `${año}${mes}${dia}`;
}

// 🔹 Función para formatear fecha de ddmmaaaa a dd-MM-yyyy
function formatearFechaDDMMYYYY(fecha) {
  const dia = fecha.slice(0, 2);
  const mes = fecha.slice(2, 4);
  const año = fecha.slice(4);
  return `${dia}-${mes}-${año}`;
}



function convertirAntiguedad(fecha) {
  if (typeof fecha === 'string' && fecha.trim().length === 8 && /^\d{8}$/.test(fecha)) {
    const dia = fecha.slice(0, 2);
    const mes = fecha.slice(2, 4);
    const año = fecha.slice(4);
    const fechaConvertida = `${dia}-${mes}-${año}`;
    return fechaConvertida;
  }
  return "Fecha no válida";
}


function getScoreData(score) {

const table = [
  { range: [380, 380], poblacionInferior: "0.0%", probabilidadPago: "0.40%" },   
  { range: [381, 485], poblacionInferior: "0.0%", probabilidadPago: "0.50%" },  
  { range: [486, 523], poblacionInferior: "0.1%", probabilidadPago: "1.40%" },  
  { range: [524, 547], poblacionInferior: "0.3%", probabilidadPago: "4.60%" },  
  { range: [548, 571], poblacionInferior: "0.9%", probabilidadPago: "11.20%" },  
  { range: [572, 593], poblacionInferior: "1.7%", probabilidadPago: "20.70%" },  
  { range: [594, 612], poblacionInferior: "2.4%", probabilidadPago: "33.10%" },  
  { range: [613, 631], poblacionInferior: "3.1%", probabilidadPago: "50.30%" },  
  { range: [632, 651], poblacionInferior: "5.4%", probabilidadPago: "67.90%" }, 
  { range: [652, 669], poblacionInferior: "6.3%", probabilidadPago: "80.40%" }, 
  { range: [670, 681], poblacionInferior: "6.2%", probabilidadPago: "87.00%" }, 
  { range: [682, 691], poblacionInferior: "8.0%", probabilidadPago: "90.60%" },
  { range: [692, 701], poblacionInferior: "8.1%", probabilidadPago: "93.10%" },
  { range: [702, 710], poblacionInferior: "8.2%", probabilidadPago: "94.60%" },
  { range: [711, 719], poblacionInferior: "12.3%", probabilidadPago: "95.80%" },
  { range: [720, 727], poblacionInferior: "7.4%", probabilidadPago: "96.80%" },
  { range: [728, 738], poblacionInferior: "9.3%", probabilidadPago: "97.60%" },
  { range: [739, 748], poblacionInferior: "6.5%", probabilidadPago: "98.30%" },
  { range: [749, 758], poblacionInferior: "8.3%", probabilidadPago: "99.20%" },
  { range: [759, 803], poblacionInferior: "5.4%", probabilidadPago: "99.40%" }
];

if (score < 380 || score > 803) {
  return {
      score: score,
      PoblacionInferior: "¿0%?",
      ProbabilidadPago: "Se debe analizar minuciosamente"
  };
}

for (const entry of table) {
  if (score >= entry.range[0] && score <= entry.range[1]) {
      return {
          score: score,
          PoblacionInferior: entry.poblacionInferior,
          ProbabilidadPago: entry.probabilidadPago
      };
  }
}

return { error: "Score fuera de rango" };
}

function contarConsultasUltimos30Dias(consultas) {
  if (!Array.isArray(consultas)) {
      console.error("El valor de consultas no es un array.");
      return 0;
  }
  const fechaActual = new Date();
  const fechaHace30Dias = new Date();
  fechaHace30Dias.setDate(fechaActual.getDate() - 30); // Calcula la fecha de hace 30 días

  let consultasUltimos30Dias = 0;

  consultas.forEach(consulta => {
      if (consulta.fechaConsulta && consulta.fechaConsulta.length === 8) {
          const dia = parseInt(consulta.fechaConsulta.slice(0, 2));
          const mes = parseInt(consulta.fechaConsulta.slice(2, 4)) - 1;  // Restamos 1 porque los meses van de 0 a 11
          const año = parseInt(consulta.fechaConsulta.slice(4));

          const fechaConsulta = new Date(año, mes, dia);

          // Verificar si la fecha de consulta está entre hace 30 días y la fecha actual
          if (fechaConsulta >= fechaHace30Dias && fechaConsulta <= fechaActual) {
              consultasUltimos30Dias += 1;
          }
      }
  });

  return consultasUltimos30Dias;
}

function contarConsultasUltimos12Meses(consultas) {
  if (!Array.isArray(consultas)) {
      console.error("El valor de consultas no es un array.");
      return 0;
  }

  const fechaActual = new Date();
  const fechaHace12Meses = new Date();
  fechaHace12Meses.setFullYear(fechaActual.getFullYear() - 1); // Calcula la fecha de hace 12 meses

  let consultasUltimos12Meses = 0;

  consultas.forEach(consulta => {
      if (consulta.fechaConsulta && consulta.fechaConsulta.length === 8) {
          const dia = parseInt(consulta.fechaConsulta.slice(0, 2));
          const mes = parseInt(consulta.fechaConsulta.slice(2, 4)) - 1;  // Restamos 1 porque los meses van de 0 a 11
          const año = parseInt(consulta.fechaConsulta.slice(4));

          const fechaConsulta = new Date(año, mes, dia);

          // Verificar si la fecha de consulta está entre hace 12 meses y la fecha actual
          if (fechaConsulta >= fechaHace12Meses && fechaConsulta <= fechaActual) {
              consultasUltimos12Meses += 1;
          }
      }
  });

  return consultasUltimos12Meses;
}




function analyzeCreditReportFromJson(score, codigoRazon, icc, configuration, reporteData, antiguedad, consultas, mensajesBD, codigoRazonScore ) {
//console.log(consultas)
typeof (antiguedad)
  if (isNaN(score)) {
    return { status: "error", message: "El score no es un número válido." };
  }

  if (codigoRazon && typeof codigoRazon !== "string") {
    return { status: "error", message: "El código de exclusión no es válido." };
  }

  if (isNaN(icc)) {
    return { status: "error", message: "El ICC no es un número válido." };
  }

  return analyzeCreditReport(score, codigoRazon, icc, configuration, reporteData, antiguedad, consultas, mensajesBD, codigoRazonScore); 
}

function analyzeCreditReport(score, codigoRazon, icc, configuration, reporteData, antiguedad, consultas, mensajesBD, codigoRazonScore) {

  const exclusionCodes = {
    '-1': 'Consumidor Fallecido',
    '-5': 'Expediente con todas las cuentas cerradas y por lo menos con una en atraso mayor o igual a 90 días',
    '-6': 'Expediente con todas sus cuentas con antigüedad menor a 6 meses y al menos una tiene MOP ≥ 03',
    '-7': 'Expediente con todas sus cuentas con antigüedad menor a 6 meses y al menos una tiene MOP ≥ 02',
    '-8': 'Expediente no tiene al menos una cuenta actualizada en el último año o con antigüedad mínima de 6 meses, y/o con cuentas que no se incluyen en el cálculo del BC-Score',
    '-9': 'Expediente sin cuentas para cálculo de BC-Score',
  };

  function calcularTotalLimiteCredito(reporteData) {
    let total = 0;
  
    reporteData.forEach((item) => {
      const limiteCredito = parseFloat((item.limiteCredito || '').replace(/[^0-9.]/g, '')) || 0;
      const creditoMaximo = parseFloat((item.creditoMaximo || '').replace(/[^0-9.]/g, '')) || 0;
  
      // Verificar si la cuenta está activa
      const cuentaActiva = !item.fechaCierreCuenta; // Si no tiene fecha de cierre, la cuenta está activa
  
      if (cuentaActiva) {
        const valorSumado = limiteCredito === 0 || limiteCredito < creditoMaximo ? creditoMaximo : limiteCredito;
        total += valorSumado;
      }
    });
  
    return total;
  }
  
  

  const analysis = {
    status: "Pendiente", // Estado inicial
    creditosActivos: 0,  // Se inicializa en 0
    creditosCerrados: 0,  // Se inicializa en 0
    creditosTotales: 0,
    totalSaldoActual: 0,
    totalSaldoVencido: 0,
    saldoActual:0,
    peorMorosidad: null,
    antiguedaBD: null,
    consultasUltimos30Dias: contarConsultasUltimos30Dias(consultas),
    hawkAlertBD: mensajesBD || [],
    consultas12Meses: contarConsultasUltimos12Meses(consultas),
    totalLimiteCredito : 0,
    razones:  obtenerCodigosRazon(codigoRazonScore)
  };

  analysis.totalLimiteCredito = calcularTotalLimiteCredito(reporteData)
  //console.log("Tipo de antiguedad:", typeof antiguedad, "Valor:", antiguedad, "Longitud:", antiguedad.length);
  const antiguedaBD = convertirAntiguedad (antiguedad);
  analysis.antiguedaBD = antiguedaBD;

  //const consultasUltimos30Dias = contarConsultasUltimos30Dias(consultas);
  //console.log("Número de consultas en los últimos 30 días:", consultasUltimos30Dias);

  
  


  const peorMorosidad = obtenerPeorMorosidad(reporteData);
  analysis.peorMorosidad = peorMorosidad;

  if (reporteData && Array.isArray(reporteData)) {
    reporteData.forEach(cuenta => {
      if (!cuenta.fechaCierreCuenta) {  // 🔹 Solo procesamos cuentas abiertas
        // 🔹 Limpiar valores para convertirlos en número
        const saldoActual = parseFloat(cuenta.saldoActual?.replace(/[^0-9.]/g, '')) || 0;
        const saldoVencido = parseFloat(cuenta.saldoVencido?.replace(/[^0-9.]/g, '')) || 0;
  
        // 🔹 Sumar los saldos de las cuentas abiertas
        analysis.totalSaldoActual += saldoActual;
        analysis.totalSaldoVencido += saldoVencido;
        analysis.saldoActual = analysis.totalSaldoActual + analysis.totalSaldoVencido;
  
        analysis.creditosActivos += 1;
      } else {
        analysis.creditosCerrados += 1;
      }
    });
  
    // 🔹 Calcular el total de créditos al final
    analysis.creditosTotales = analysis.creditosActivos + analysis.creditosCerrados;
  }
  
  
  // Análisis por score
  analysis.justificacionDecision = []; // Inicializamos el array vacío
  
  // Análisis por score
  let scoreCategory = null;
  if (score < 0 && exclusionCodes[score.toString()]) {
      const exclusionMessage = exclusionCodes[score.toString()];
      analysis.status = score === -9 || score === -8 ? "Pendiente" : "Rechazado";
      analysis.justificacionDecision.push(`El cliente tiene un código de exclusión: ${exclusionMessage}`);
  } else {
      for (const [category, config] of Object.entries(configuration)) {
          if (score >= config.min && score <= config.max) {
              scoreCategory = category;
              analysis.justificacionDecision.push(`El cliente tiene un score ${category}`);
              break;
          }
      }
  
      if (!scoreCategory) {
          analysis.status = "Rechazado";
          analysis.justificacionDecision.push("El score no corresponde a ninguna categoría válida.");
      } else {
          if (["medio", "alto", "muyAlto"].includes(scoreCategory)) {
              analysis.status = "Aprobado";
          } else if (["bajo", "muyBajo"].includes(scoreCategory)) {
              analysis.status = "Rechazado";
          }
      }
  }
  
  // Análisis por ICC
  let iccCategoryMessage = "";
  if (icc >= 0 && icc <= 7) {
      iccCategoryMessage = "El cliente tiene un ICC bajo";
  } else if (icc === 8) {
      iccCategoryMessage = "El cliente tiene un ICC medio";
  } else if (icc === 9) {
      iccCategoryMessage = "El cliente tiene un ICC alto";
  }
  
  if (iccCategoryMessage) {
      analysis.justificacionDecision.push(iccCategoryMessage);
  }
  
  // Análisis por códigos de exclusión
  if (codigoRazon) {
      if (exclusionCodes[codigoRazon]) {
          const exclusionMessage = exclusionCodes[codigoRazon];
          analysis.status = codigoRazon === "-8" || codigoRazon === "-9" ? "Pendiente" : "Rechazado";
          analysis.justificacionDecision.push(`Código de exclusión: ${exclusionMessage}`);
      } else {
          analysis.justificacionDecision.push("El cliente no cuenta con códigos de exclusión");
      }
  }
  

  // Análisis por ICC
  let iccCategory = ""; 
  ///console.log(`ICC: ${icc}`);
  if (icc >= 0 && icc <= 1) iccCategory = "base";
  else if (icc >= 2 && icc <= 3) iccCategory = "bronce";
  else if (icc >= 4 && icc <= 5) iccCategory = "plata";
  else if (icc >= 6 && icc <= 7) iccCategory = "oro";
  else if (icc >= 8 && icc <= 9) iccCategory = "platino";
  
  if (!iccCategory) {
    analysis.iccAnalysis = {
        message: "El ICC no corresponde a ninguna categoría."
    };
} else {
    const iccMessage = configuration[scoreCategory]?.[iccCategory] || "ICC no coincide con la configuración del score obtenido.";
    
    analysis.iccAnalysis = {
        category: iccCategory,
        message: iccMessage
    };
}


const scoreData = getScoreData(score);
if (!scoreData.error) {
    analysis.probabilidadPagoCliente = scoreData.ProbabilidadPago;
    analysis.poblacionInferior = scoreData.PoblacionInferior;
} else {
    analysis.probabilidadPagoCliente = "Se debe analizar minuciosamente";
    analysis.poblacionInferior = "¿0%?";
}

  // Eliminar la propiedad messages para mantener solo message
  //delete analysis.messages;
  console.log(" JSON del análisis:", JSON.stringify(analysis, null, 2));
  return analysis;
}

  // const result = analyzeCreditReport(score, codigoRazon, icc, configuration, reporteData, antiguedad, consultas, mensajesBD);
  // console.log(result);

  const result = analyzeCreditReport(score, codigoRazon, icc, configuration, reporteData, antiguedad, consultas, mensajesBD, codigoRazonScore);
  console.log(result);

module.exports = { analyzeCreditReportFromJson };

