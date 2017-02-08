var uuid = require('node-uuid');
var $ = require('jquery');
module.exports = {
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
			return unit.nadrzedny === symbol;
		});
		return u;
	},
	treeUnits: function(units, symbol) {

		var treeUnits = {
				id: units[0].id,
				nazwa: units[0].nazwa,
				symbol: units[0].symbol,
				childNodes: []
			};

		function traverse(x, s) {
			if (Object.prototype.toString.call(x) === '[object Array]') {
				x.forEach(function (x) {
					traverse(x, s);
				});
			} else if ((typeof x === 'object') && (x !== null) && x.hasOwnProperty('nazwa')) {
				if (x.symbol === s.nadrzedny) {

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
