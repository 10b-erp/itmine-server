// require environment variables from .env
require('dotenv').config();

const { AddressInfo, TrackingInfo, Order, Store, Brand } = require('./db');

// web server
const express = require('express');
const app = express();

// web server endpoints
app.post('/api/orders', (req, res) => {
  Order.find({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.send(false);
    });
});

app.post('/api/stores', (req, res) => {
  Store.find({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.send(false);
    });
});

app.post('/api/brands', (req, res) => {
  Brand.find({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.send(false);
    });
});

// new Brand({
//   name: 'JCPenny\'s',
//   category: 'clothing'
// }).save()
//   .then(() => console.log('Successfully saved!'))
//   .catch(err => console.error('Error ' + err));

// listen on web server and statically serve files
app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(process.env.port || 5000, () => console.info('Listening on port ' + (process.env.PORT || 5000)));
