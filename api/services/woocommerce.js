var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://api.woongular.dev', // Your store URL
  consumerKey: 'ck_4dd61556fb847e6c9cec33f2ee47753b09c89154', // Your consumer key
  consumerSecret: 'cs_288260ab3b168cef92cacc5e87d33d3fcc1bd131', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v1' // WooCommerce WP REST API version
});

module.exports = WooCommerce;