var uuid = require('node-uuid');
var $ = require('jquery');
module.exports = {
	getUnits: function () {
		var stringUnits = localStorage.getItem('units');
    var units = [];

    try{
        units = JSON.parse(stringUnits);
    } catch (e) {

    }

    return $.isArray(units) ? units : [];
	},
	unitById: function(units, id){
		var u = units;
		u = u.filter((unit)=>{
			return unit.id === id;
		});
		return u[0];
	},
	unitsBelowBySymbol: function(units, symbol) {
		var u = units;
		u = u.filter((unit) => {
			return unit.nadrzędny === symbol;
		});
		return u;
	},
	treeUnits: function(units, symbol) {

		var u = units;
		u = u.filter((unit)=>{
			return unit.symbol === symbol;
		});

		var treeUnits = {
				id: u[0].id,
				nazwa: u[0].nazwa,
				symbol: u[0].symbol,
				childNodes: []
			};

		function traverse(x, s) {
			if (Object.prototype.toString.call(x) === '[object Array]') {
				x.forEach(function (x) {
					traverse(x, s);
				});
			} else if ((typeof x === 'object') && (x !== null) && x.hasOwnProperty('nazwa')) {
				if (x.symbol === s.nadrzędny) {

					var ss = {
						id: s.id,
						nazwa: s.nazwa,
						symbol: s.symbol,
						childNodes: []
					};
					x.childNodes.push(ss);
				}
				traverse(x.childNodes, s);
			}
		}

		for (var i = 1; i < units.length; i++) {
			traverse(treeUnits, units[i]);
		}

		return treeUnits;
	}
};
