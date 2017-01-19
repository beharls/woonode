/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 *
 * We should only be able to view products and product details
 */

const WooCommerce = require('../services/woocommerce');
const util = require('../services/util');

module.exports = {
	find: function(req, res) {
    WooCommerce.getAsync('products').then(function(result) {
      res.send(JSON.parse(result.toJSON().body));
    }).catch(function(err){
      sails.log.error(err);
      res.status(500).send('There was an error loading products');
    });
  },

  findOne: function(req, res) {
	  const id = req.param('id');
    (util.isNumeric(id)) ? this.findOneByID(req, res, id) : this.findOneBySlug(req, res, id);
  },

  findOneByID: function(req, res, id) {
    WooCommerce.getAsync('products/' + id).then(function(result) {
      res.send(JSON.parse(result.toJSON().body));
    }).catch(function(err){
      res.status(404).send('Product Not Found');
    });
  },

  findOneBySlug: function(req, res, id) {
    WooCommerce.getAsync('products?slug=' + id).then(function(result) {
      var resultJson = JSON.parse(result.toJSON().body);
      var product = Array.isArray(resultJson) ? resultJson[0]: resultJson;
      res.send(product);
    }).catch(function(err){
      res.status(404).send('Product Not Found');
    });
  },

  featured: function(req, res) {
    WooCommerce.getAsync('products?filter[meta_key]=_featured&filter[meta_value]=yes').then(function(result) {
      res.send(JSON.parse(result.toJSON().body));
    }).catch(function(err){
      sails.log.error(err);
      res.status(500).send('There was an error loading products');
    });
  },


};

