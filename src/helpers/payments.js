
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const User = require('../models/User');


dotenv.config({});



const charge = async () => {
const response = await  fetch('https://api.paystack.co/charge', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      authorization: process.env.PAYSTACK_API_KEY

    },
    body: JSON.stringify({
      email: 'igunnuemmanuel@gmail.com',
      amount: '10000',
      card: {
        cvv: '408', number: '4084084084084081', expiry_month: '01', expiry_year: '99'
      },
      pin: '1234'
    })
  }).then((res) => res.json()).then(async (response) => {
    if (response.data.status == 'success') {
      
    }
  });
};

charge();

const submit_otp = () => {

};
