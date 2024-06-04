const axios = require('axios');

const accountSid = 'AC07338b02e72aa45e576a281366c78152';
const authToken = 'd3eda2378adb00100d15ce604ed4a2d4';
const fromNumber = '+14155238886';
const toNumber = '+6285624923751';
const message = document.getElementById('pesan').value;

const messageData = {
  To: `whatsapp:${toNumber}`,
  From: `whatsapp:${fromNumber}`,
  Body: message
};

axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, messageData, {
  auth: {
    username: accountSid,
    password: authToken
  }
})
.then(response => {
  console.log('Message sent successfully!');
  console.log(response.data);
})
.catch(error => {
  console.error('Error sending message:', error);
});
