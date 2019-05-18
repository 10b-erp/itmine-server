// utility class for api
class Util {

  // sanitize user input (generic, very simple for now)
  static sanitize(value) {
    return value.toString().replace(/[^a-zA-Z0-9\-_.]/g, '');
  }

  // generate http response
  static generateResponse(errorCode, errorMessage='', additionalData={}, errorObject=null) {
    if(errorObject !== null) {
      console.error(errorObject);
    }
    return {
      errorCode: errorCode,
      errorMessage: errorMessage,
      additionalData: additionalData
    };
  }

}

module.exports = Util;
