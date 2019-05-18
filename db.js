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
  city_locality: String,
  state_province: String,
  postal_code: String,
  country_code: String,
  address_residential_locator: String
});
const trackingInfoSchema = new mongoose.Schema({
  // working here
});
const reviewSchema = new mongoose.Schema({
  // working here
});
const orderSchema = new mongoose.Schema({
  store_id: String,
  address: addressSchema,
  trackingInfo: trackingInfoSchema,
  reviews: [reviewSchema]
});
const storeSchema = new mongoose.Schema({
  brand_id: String,
  address: addressSchema,
});
const brandSchema = new mongoose.Schema({
  name: String,
  category: String
});

// defining models
const AddressInfo = new mongoose.model('addressinfo', addressSchema);
const TrackingInfo = new mongoose.model('trackinginfo', trackingInfoSchema);
const Order = new mongoose.model('order', orderSchema);
const Store = new mongoose.model('store', storeSchema);
const Brand = new mongoose.model('brand', brandSchema);

module.exports = {
  AddressInfo: AddressInfo,
  TrackingInfo: TrackingInfo,
  Order: Order,
  Store: Store,
  Brand: Brand
};
