class DataRequestCreditOfficeImpl {
    getDataForRequestToBuro(fromRequest) {
      const addressInfo = fromRequest.addressInformation;
      const personalInfo = fromRequest.generalInformation;
  
      const domicilios = addressInfo ? [{
        ciudad: addressInfo.city || "",
        codPais: "MX",
        coloniaPoblacion: addressInfo.neighborhood || "",
        cp: addressInfo.postalCode || "",
        delegacionMunicipio: addressInfo.municipalityOrBorough || "",
        direccion1: addressInfo.street || "",
        direccion2: "",
        estado: addressInfo.state || "",
        extension: "",
        fax: "",
        fechaResidencia: "",
        indicadorEspecialDomicilio: "",
        numeroTelefono: "",
        tipoDomicilio: ""
      }] : [];
  
      return {
        consulta: {
          persona: {
            cuentaC: [
              {
                claveOtorgante: "",
                nombreOtorgante: "",
                numeroCuenta: ""
              }
            ],
            domicilios,
            empleos: [],
            encabezado: {
              clavePais: "MX",
              claveUnidadMonetaria: "",
              identificadorBuro: "0000",
              idioma: "SP",
              importeContrato: "000000000",
              numeroReferenciaOperador: "                         ", // 25 espacios
              productoRequerido: "004",
              tipoConsulta: "I",
              tipoContrato: "CC"
            },
            nombre: {
              apellidoAdicional: "",
              apellidoMaterno: personalInfo?.maternalLastName || "",
              apellidoPaterno: personalInfo?.paternalLastName || "",
              claveImpuestosOtroPais: "",
              claveOtroPais: "",
              edadesDependientes: "",
              estadoCivil: "",
              fechaNacimiento: personalInfo?.birthDate || "",
              nacionalidad: "",
              numeroCedulaProfesional: "",
              numeroDependientes: "",
              numeroLicenciaConducir: "",
              numeroRegistroElectoral: "",
              prefijo: "",
              primerNombre: personalInfo?.firstName || "",
              residencia: "",
              rfc: personalInfo?.rfc || "",
              segundoNombre: personalInfo?.secondName || "",
              sexo: "",
              sufijo: ""
            }
          }
        }
      };
    }
  }
  
  module.exports = new DataRequestCreditOfficeImpl();
  