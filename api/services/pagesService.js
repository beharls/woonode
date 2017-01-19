const _ = require('lodash');
var pagesService = {};

pagesService.removeWooPages = function(data) {
  _.remove(data, pagesService.wooPagesComparator);
  return data;
};

pagesService.wooPagesComparator = function(page) {
  const slugs = ["my-account","checkout","cart","shop"];
  return (slugs.indexOf(page.slug) > -1);
};

pagesService.getBySlug = function(pages,slug) {
  return _.find(pages, ['slug', slug]);
};

module.exports = pagesService;