const _ = require('lodash');
var pagesService = function(){
  const removeWooPages = function(data) {
    const removePages = function(page) {
      const slugs = ["my-account","checkout","cart","shop"];
      return (slugs.indexOf(page.slug) > -1);
    };
    _.remove(data, removePages);
    return data;
  };

  const getBySlug = function(pages,slug) {
    return _.find(pages, ['slug', slug]);
  };

  return {
    removeWooPages: removeWooPages,
    getBySlug: getBySlug
  }


};


module.exports = pagesService();