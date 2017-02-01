var React = require('react');
var OrganizationList = require('OrganizationList');

var Organization = React.createClass({
	getInitialState: function(){
		return {
			unitsList: [
				{
					id: 1,
					nazwa: 'Narodowe Centrum Nauki',
					opis: '',
					symbol: 'NCN',
					nadrzedny: ''
				},
				{
					id: 2,
					nazwa: 'Dział Badań Naukowych i Rozwoju Naukowców',
					opis: '',
					symbol: 'BDR',
					nadrzedny: 'NCN'
				},
				{
					id: 3,
					nazwa: 'Zespół ds. Nauk Humanistycznych, Społecznych i o Sztuce',
					opis: '',
					symbol: 'ZHS',
					nadrzedny: 'DBR'
				},
				{
					id: 4,
					nazwa: 'Zespół ds. Nauk o Życiu',
					opis: '',
					symbol: 'ZNZ',
					nadrzedny: 'DBR'
				},
				{
					id: 5,
					nazwa: 'Zespół ds. Nauk Ścisłych i Technicznych',
					opis: '',
					symbol: 'ZST',
					nadrzedny: 'DBR'
				},
				{
					id: 6,
					nazwa: 'Zespół ds. Obsługi Dokumentacji Ekspertów',
					opis: '',
					symbol: 'ZDE',
					nadrzedny: 'DBR'
				}
			]
		}
	},
	handleUnitClick: function(id) {
		alert(id);
	},
	render: function () {
		var {unitsList} = this.state;
		return (
			<div>
				<OrganizationList unitsList={unitsList} onClick={this.handleUnitClick}/>
			</div>
		);
	}
});

module.exports = Organization;
