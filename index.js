// require environment variables from .env
if(process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

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

  // if already signed in error
  if(req.session.uid) {
    return res.send(Util.generateResponse(4, 'Already signed in.'));
  }

  // get and sanitize email and password
  const email = Util.sanitize(req.body.email);
  const password = Util.sanitize(req.body.password);

  // find user
  User.findOne({ email: email })
    .then(data => {
      if (data === null) {
        res.send(Util.generateResponse(1, 'Invalid credentials'));
      } else if(bcrypt.compareSync(password, data.password)) {
        req.session.uid = data._id.toString();
        req.session.save(err => {
          res.send(Util.generateResponse(0));
        });
      } else {
        res.send(Util.generateResponse(1, 'Invalid credentials'));
      }
    })
    .catch(err => {
      res.send(Util.generateResponse(2, 'Database error', err));
    });
});

// sign up endpoint
app.post('/api/signup', async (req, res) => {

  // if already signed in error
  if(req.session.uid) {
    return res.send(Util.generateResponse(4, 'Already signed in.'));
  }

  // get and sanitize inputs
  const email = Util.sanitize(req.body.email);
  const password = Util.sanitize(req.body.password);
  const name = Util.sanitize(req.body.name);
  const phone = Util.sanitize(req.body.phone);

  const company = Util.sanitize(req.body.company);
  const addressLine1 = Util.sanitize(req.body.address.addressLine1);
  const addressLine2 = Util.sanitize(req.body.address.addressLine2);
  const cityLocality = Util.sanitize(req.body.address.cityLocality);
  const stateProvince = Util.sanitize(req.body.address.stateProvince);
  const postalCode = Util.sanitize(req.body.address.postalCode);
  const countryCode = Util.sanitize(req.body.address.countryCode);

  console.log(email, password, name, phone, company, addressLine1, addressLine2, cityLocality, stateProvince, postalCode, countryCode);

  // check if already exists
  try {
    const userQuery = await User.find({ email: email });

    if(userQuery !== null && userQuery.length !== 0) {
      return res.send(Util.generateResponse(2, 'Email already taken'));
    }

    const userAddress = new Address({
      name: name,
      phone: phone,
      company_name: company,
      address_line1: addressLine1,
      address_line2: addressLine2,
      city_locality: cityLocality,
      state_province: stateProvince,
      postal_code: postalCode,
      country_code: countryCode,
      address_residential_locator: 'no'
    });
    const salt = bcrypt.genSaltSync(12);
    const passwordHash = bcrypt.hashSync(password, salt);
    const user = await new User({
      address: userAddress,
      password: passwordHash,
      email: email,
      name: name,
      phone: phone
    }).save();

    req.session.uid = user._id.toString();
  } catch(err) {
    return res.send(Util.generateResponse(3, 'Database error', {}, err));
  }

  res.send(Util.generateResponse(0));

});

// sign out endpoint
app.post('/api/signout', (req, res) => {

  req.session.uid = null;
  req.session.regenerate(err => {
    req.session.uid = null;
    req.session.save(err => {
      res.send(Util.generateResponse(0));
    });
  });

});

// get user details
app.post('/api/userdetails', async (req, res) => {

  if(!req.session.uid) {
    return res.send(Util.generateResponse(4, 'Need to be signed in.'));
  }

  try {
    const userQuery = await User.findOne({_id: req.session.uid });
    return res.send(Util.generateResponse(0, '', {
      id: req.session.uid,
      name: userQuery.name,
      email: userQuery.email
    }));
  } catch(err) {
    return res.send(Util.generateResponse(3, 'Database query error.'));
  }

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

// buy n package protections
app.post('/api/orderpps', async (req, res) => {

  // make sure signed in
  if(!req.session.uid) {
    return res.send(Util.generateResponse(4, 'Must be signed in to order labels'));
  }

  // get number of orders
  const n = parseInt(req.body.n) || 0;
  if(n <= 0) {
    return res.send(Util.generateResponse(1, 'Invalid number of PPs ordered'));
  } else if(n >= 10) {
    return res.send(Util.generateResponse(1, 'Invalid number of PPs ordered (10 max at a time)'));
  }

  // create and configure packages in db
  const array = [...new Array(n)].map(e => ({ uid: req.session.uid }));
  try {
    const queryResponse = await Package.insertMany(array);
    res.send(Util.generateResponse(0));
  } catch(err) {
    res.send(Util.generateResponse(3, 'Database error.', {}, err));
  }
});

// api endpoint to get packages
app.post('/api/packages', async (req, res) => {

  // check if signed in
  if(!req.session.uid) {
    return res.send(Util.generateResponse(4, 'You must be signed in'));
  }

  // get packages
  try {
    const packagesQuery = await Package.find({ uid: req.session.uid });
    res.send(Util.generateResponse(0, '', packagesQuery));
  } catch(err) {
    res.send(Util.generateResponse(3, 'Database error', {}, err));
  }

});

// listen on web server and statically serve files
app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(process.env.PORT || 5000, () => console.info('Listening on port ' + (process.env.PORT || 5000)));
