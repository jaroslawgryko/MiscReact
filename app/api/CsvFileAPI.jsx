var $ = require('jquery');
module.exports = {
  setUnits: function(units) {
    if($.isArray(units)) {
      localStorage.setItem('units', JSON.stringify(units));
      return units;
    }
  },
  getUnits: function() {
    var stringUnits = localStorage.getItem('units');
    var units = [];

    try{
        units = JSON.parse(stringUnits);
    } catch (e) {

    }

    return $.isArray(units) ? units : [];
  }
};
