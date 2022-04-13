var generator = require('generate-password');
var twilioConfig = require('../config/twillio.config');
var twilio = twilioConfig.client

const GenerateOTP = (lenght) => {

    var OTP = generator.generate({
        length: lenght,
        numbers: true,
        lowercase: false,
        uppercase: false
    });
    
   return OTP;
};

const sendByTwilio = async (toNumber,message) => {
    try {
        return await twilio.messages
    .create({
       body: message,
       from: twilioConfig.phoneNumber,
       to: toNumber
     })
    .then(responseMessage => {
        return responseMessage
    });

    } catch (error) {
       return error;
    }
    
}


module.exports = {
    GenerateOTP,
    sendByTwilio
}