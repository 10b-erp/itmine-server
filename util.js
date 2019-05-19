// request library for making api requests
const request = require("request");

// utility class for api
class Util {

  // sanitize user input (generic, very simple for now)
  static sanitize(value) {
    return (value || '').toString().replace(/[^a-zA-Z0-9\-_. @$!%^&()+=,]/g, '');
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

  // make api requests
  static makeRequest(url, data) {
    const options = {
      method: 'POST',
      url: url,
      headers: {
        'api-key': process.env.SHIPENGINE_API_KEY,
        'Content-Type': 'application/json'
      },
      body: data,
      json: true
    };
    return new Promise((resolve, reject) => {
      request(options, function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  }

}

module.exports = Util;
