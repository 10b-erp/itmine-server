// require environment variables from .env
require('dotenv').config();

// mongoose schemas
const { Address, Tracking, User, Package } = require('./db');

// some utility functions
const Util = require('./util');

// web server
const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30*24*60*60*1000 }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// web server endpoints
// sign in endpoint
app.post('/api/signin', (req, res) => {

  // get and sanitize email and password
  const email = Util.sanitize(req.body.email);
  const password = Util.sanitize(req.body.password);

  // find user
  User.find({ email: email })
    .then(data => {
      if (data === null) {
        res.send(Util.generateResponse(1, 'Invalid credentials'));
      } else if(bcrypt.compareSync(password, data.password)) {
        res.send(Util.generateResponse(0));
      } else {
        res.send(Util.generateResponse(1, 'Invalid credentials'));
      }
    })
    .catch(err => {
      res.send(Util.generateResponse(2, 'Database error', err));
    });
});

// sign up endpoint
app.post('/api/signup', (req, res) => {

  // get and sanitize inputs
  const email = Util.sanitize(req.body.email);
  const password = Util.sanitize(req.body.password);
  const name = Util.sanitize(req.body.name);
  const phone = Util.sanitize(req.body.phone);

  const companyName = Util.sanitize(req.body.companyName);
  const addressLine1 = Util.sanitize(req.body.addressLine1);
  const addressLine2 = Util.sanitize(req.body.addressLine2);
  const cityLocality = Util.sanitize(req.body.cityLocality);
  const stateProvince = Util.sanitize(req.body.stateProvince);
  const postalCode = Util.sanitize(req.body.postalCode);
  const countryCode = Util.sanitize(req.body.countryCode);

  // do stuff
  // ...

  res.send(Util.generateResponse(0));

});

// use shipengine api to validate and correct
app.post('/api/validateaddress', (req, res) => {

  const addressLine1 = Util.sanitize(req.body.addressLine1);
  const addressLine2 = Util.sanitize(req.body.addressLine2);
  const cityLocality = Util.sanitize(req.body.cityLocality);
  const stateProvince = Util.sanitize(req.body.stateProvince);
  const postalCode = Util.sanitize(req.body.postalCode);
  const countryCode = Util.sanitize(req.body.countryCode);

  const url = 'https://api.shipengine.com/v1/addresses/validate';
  const data = [{
    name: '',
    phone: '',
    company_name: '',
    address_line1: addressLine1,
    address_line2: addressLine2,
    city_locality: cityLocality,
    state_province: stateProvince,
    postal_code: postalCode,
    country_code: countryCode
  }];

  Util.makeRequest(url, data)
    .then(response => {
      if(response[0] && response[0].status === 'verified') {
        res.send(Util.generateResponse(0, '', response[0].matched_address));
      } else {
        res.send(Util.generateResponse(1, ''));
      }
    })
    .catch(err => {
      console.error(err);
      res.send(Util.generateResponse(2, 'Error with database validation request'));
    });

});

// listen on web server and statically serve files
app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(process.env.port || 5000, () => console.info('Listening on port ' + (process.env.PORT || 5000)));
