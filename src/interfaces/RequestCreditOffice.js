// Este archivo define las interfaces necesarias
class GeneralInformation {
    constructor(firstName, birthDate, email, maternalLastName, paternalLastName, rfc) {
      this.firstName = firstName;
      this.birthDate = birthDate;
      this.email = email;
      this.maternalLastName = maternalLastName;
      this.paternalLastName = paternalLastName;
      this.rfc = rfc;
      //this.phone = phone;
    }
  }
  
  class AddressInformation {
    constructor(street, city, state, municipalityOrBorough, neighborhood, postalCode) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.municipalityOrBorough = municipalityOrBorough;
      this.neighborhood = neighborhood;
      this.postalCode = postalCode;
    }
  }
  
  // class RequestCreditOffice {
  //   constructor(generalInformation, addressInformation) {
  //     this.generalInformation = generalInformation;
  //     this.addressInformation = addressInformation;
  //   }
  // }
  
  module.exports = {
    GeneralInformation,
    AddressInformation,
  //  RequestCreditOffice,
  };
  