var util = {};

util.isNumeric = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = util;