var util = function(){

  const isNumeric = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  return {
    isNumeric: isNumeric
  }

};

module.exports = util();