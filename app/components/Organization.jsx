var React = require('react');
var uuid = require('node-uuid');
var OrganizationList = require('OrganizationList');
var OrganizationTree = require('OrganizationTree');
var OrganizationAPI = require('OrganizationAPI');

var Organization = React.createClass({
	getInitialState: function(){
		return {
			units: OrganizationAPI.getUnits(),
			tree: {
					id: 0,
					symbol: '',
					nazwa: ''
				}
		}
	},
	handleUnitClick: function(id) {
		var {units} = this.state;

		var u = OrganizationAPI.unitById(units,id);
		var treeUnits = OrganizationAPI.treeUnits(units, u.symbol);

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
