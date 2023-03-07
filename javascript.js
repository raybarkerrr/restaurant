let mobileMenu = document.querySelector('.mobileMenu');
let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
}


function initMap() {
   
   const yosemite = { lat: 37.88407138217377, lng: -119.51635674423457 };
   
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: yosemite,
   });
   
   const marker = new google.maps.Marker({
     position: yosemite,
     map: map,
   });
 }
 
 window.initMap = initMap;


const stripe = require('stripe')('sk_test_51MinZZKkGpyFNMs8UqRPdZ9H3TDMUJzxcf6ExJeBG0BicLZwzluiaA0yf5mep2zEyCjTcwTq0hPJxsZCSmAPoZYY004oxg2qiA');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://127.0.0.1:5500/';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1MincuKkGpyFNMs8Is0Q4JIF',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));