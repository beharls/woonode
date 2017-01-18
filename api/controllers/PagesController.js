/**
 * PagesController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const wp = require('../services/wp');
const util = require('../services/util');
const pagesService = require('../services/pagesService');

module.exports = {
  find: function(req, res) {
    wp.pages().then(function(data) {
      const filteredPages = pagesService.removeWooPages(data);
      res.send(filteredPages);
    }).catch(function(err){
      sails.log.error(err);
      res.status(500).send('There was an error loading pages');
    });
  },

  findOne: function(req, res) {
    const pageID = req.param('id');
    (util.isNumeric(pageID)) ? this.findOneByID(req, res, pageID) : this.findOneBySlug(req, res, pageID);
  },

  findOneByID: function(req, res, pageID) {
    wp.pages().id(pageID).then(function(data) {
      res.send(data);
    }).catch(function(err){
      res.status(404).send('Page Not Found');
    });
  },

  findOneBySlug: function(req, res, pageID) {
    wp.pages().then(function(data) {
      const filteredPages = pagesService.getBySlug(data,pageID);
      if(filteredPages) {
        res.send(filteredPages);
      } else {
        throw new Error();
      }
    }).catch(function(err){
      res.status(404).send('Page Not Found');
    });
  }
};
