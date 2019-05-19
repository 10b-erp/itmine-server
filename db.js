// require environment variables from .env
require('dotenv').config();

// database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => console.info('Connected to mongodb'))
  .catch(err => console.error('Error connecting to mongodb: ' + err));

// defining schemas
const addressSchema = new mongoose.Schema({
  name: String,
  phone: String,
  company_name: String,
  address_line1: String,
  address_line2: String,
  city_locality: String,
  state_province: String,
  postal_code: String,
  country_code: String,
  address_residential_locator: String
});
const trackingSchema = new mongoose.Schema({
  // working here
});
const userSchema = new mongoose.Schema({
  address: addressSchema,
  password: String,
  email: String,
  name: String,
  phone: String
});
const packageSchema = new mongoose.Schema({
  uid: String,
  tracking: { type: trackingSchema, default: null },
  purchaseDate: { type: Date, default: Date.now },
  weight: Number,
  giftEmail: String
});

// defining models
const Address = new mongoose.model('address', addressSchema);
const Tracking = new mongoose.model('tracking', trackingSchema);
const User = new mongoose.model('user', userSchema);
const Package = new mongoose.model('package', packageSchema);

module.exports = {
  Address: Address,
  Tracking: Tracking,
  User: User,
  Package: Package
};
