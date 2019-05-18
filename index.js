// require environment variables from .env
require('dotenv').config();

// database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => console.info('Connected to mongodb'))
  .catch(err => console.error('Error connecting to mongodb: ' + err));

// defining schemas
const shippingInfoSchema = new mongoose.Schema({
  name: String,
  phone: String,
  company_name: String,
  address_line1: String,
  city_locality: String,
  state_province: String,
  postal_code: String,
  country_code: String,
  address_residential_locator: String
});
const trackingInfoSchema = new mongoose.Schema({
  // working here
});
const userSchema = new mongoose.Schema({
  balance: Number,
  shippingInfo: shippingInfoSchema
});
const itemSchema = new mongoose.Schema({
  uid: String,
  trackingInfo: trackingInfoSchema,
  isActive: Boolean,
  isCompleted: Boolean
});

// defining models
const ShippingInfo = new mongoose.model('shippinginfo', shippingInfoSchema);
const TrackingInfo = new mongoose.model('trackinginfo', trackingInfoSchema);
const User = new mongoose.model('user', userSchema);
const Item = new mongoose.model('item', itemSchema);
