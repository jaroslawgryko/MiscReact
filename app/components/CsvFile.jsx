var React = require('react');
var Papa = require('papaparse');

var CsvFileForm = require('CsvFileForm');
var CsvFileContent = require('CsvFileContent');


var CsvFile = React.createClass({

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
				<CsvFileForm onFileChange={this.handleFileSelection}/>
				<CsvFileContent data={data} columns={columns} totalCount={totalCount} />
			</div>
		);
	}
});

module.exports = CsvFile;
