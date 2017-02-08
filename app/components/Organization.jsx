var React = require('react');
var uuid = require('node-uuid');
var OrganizationList = require('OrganizationList');
var OrganizationTree = require('OrganizationTree');
var OrganizationAPI = require('OrganizationAPI');

var Organization = React.createClass({
	getInitialState: function(){
		return {
			units: [
				{
					id: uuid(),
					nazwa: 'Narodowe Centrum Nauki',
					opis: '',
					symbol: 'NCN',
					nadrzedny: 'BRAK'
				},
				{
					id: uuid(),
					nazwa: 'Dział Badań Naukowych i Rozwoju Naukowców',
					opis: '',
					symbol: 'DBR',
					nadrzedny: 'NCN'
				},
				{
					id: uuid(),
					nazwa: 'Zespół ds. Nauk Humanistycznych, Społecznych i o Sztuce',
					opis: '',
					symbol: 'ZHS',
					nadrzedny: 'DBR'
				},
				{
					id: uuid(),
					nazwa: 'Zespół ds. Nauk o Życiu',
					opis: '',
					symbol: 'ZNZ',
					nadrzedny: 'DBR'
				},
				{
					id: uuid(),
					nazwa: 'Zespół ds. Nauk Ścisłych i Technicznych',
					opis: '',
					symbol: 'ZST',
					nadrzedny: 'DBR'
				},
				{
					id: uuid(),
					nazwa: 'Zespół ds. Obsługi Dokumentacji Ekspertów',
					opis: '',
					symbol: 'ZDE',
					nadrzedny: 'DBR'
				},
				{
					id: uuid(),
					nazwa: 'Dział Finansowo-Księgowy',
					opis: '',
					symbol: 'DFK',
					nadrzedny: 'NCN'
				},
				{
					id: uuid(),
					nazwa: 'Zespół Finansowy',
					opis: '',
					symbol: 'ZF',
					nadrzedny: 'DFK'
				},
				{
					id: uuid(),
					nazwa: 'Zespół Kadrowo-Płacowy',
					opis: '',
					symbol: 'ZKP',
					nadrzedny: 'DFK'
				},
				{
					id: uuid(),
					nazwa: 'Zespół Księgowy',
					opis: '',
					symbol: 'ZK',
					nadrzedny: 'DFK'
				},

			],
			tree: {
					id: 0,
					symbol: '',
					nazwa: ''
				}

		}
	},
	handleUnitClick: function(id) {
		var {units} = this.state;

		//var s = OrganizationAPI.unitById(units,id);
        //
		//var filteredUnits = OrganizationAPI.unitsBelowBySymbol(units, s.symbol);
		//console.log('nadrzedny:',s.symbol,' filteredUnits len:',filteredUnits.length);

		var treeUnits = OrganizationAPI.treeUnits(units, units[0].symbol);

		this.setState({
			tree: treeUnits
		});
	},
	render: function () {
		var {units, tree} = this.state;
		return (
			<div>
				<div className="large-6 columns">
						<OrganizationList units={units} onClick={this.handleUnitClick}/>
				</div>
				<div className="large-6 columns">
						<OrganizationTree node={tree}/>
				</div>
			</div>
		);
	}
});

module.exports = Organization;
