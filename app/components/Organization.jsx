var React = require('react');

var OrganizationFileForm = require('OrganizationFileForm');
var OrganizationCsvContent = require('OrganizationCsvContent');

var Papa = require('papaparse');

var Organization = React.createClass({

	getInitialState: function(){
		return {
			data: [],
			columns: [],
			totalCount: 0
		}
	},

	handleDataChange: function(data){
		this.setState({
			data: data.data,
			columns: data.meta.fields,
			totalCount: data.data.length
		});
	},

	handleFileSelection: function(file) {
		Papa.parse(file, {
			header: true,
			dynamicTyping: true,
			complete: this.handleDataChange
		});
	},

	render: function () {
		var {data, columns, totalCount} = this.state;
		return (
			<div>
				<OrganizationFileForm onFileChange={this.handleFileSelection}/>
				<OrganizationCsvContent data={data} columns={columns} totalCount={totalCount} />
			</div>
		);
	}
});

module.exports = Organization;
