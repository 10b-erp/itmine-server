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
  saveUnitialized: true,
  cookie: { maxAge: 30*24*60*60*1000 }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// web server endpoints
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

// listen on web server and statically serve files
app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(process.env.port || 5000, () => console.info('Listening on port ' + (process.env.PORT || 5000)));
