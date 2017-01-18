var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: sails.config.woocommerce.url, // Your store URL
  consumerKey: sails.config.woocommerce.consumerKey, // Your consumer key
  consumerSecret: sails.config.woocommerce.consumerSecret, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  wpAPIPrefix: 'wp-json',
  verifySsl: sails.config.woocommerce.verifySsl,
  version: 'wc/v1' // WooCommerce WP REST API version
});

module.exports = WooCommerce;