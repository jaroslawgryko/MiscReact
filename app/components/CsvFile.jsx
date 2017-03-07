var React = require('react');
var Papa = require('papaparse');
var uuid = require('node-uuid');

var CsvFileAPI = require('CsvFileAPI');
var CsvFileSettings = require('CsvFileSettings');
var CsvContent = require('CsvContent');

var CsvFile = React.createClass({

	getInitialState: function(){
		return {
			displayCSV: false,

			data: [],
			columns: [],
			totalCount: 0,
			

			dataTemplateType: '',
			dataMapping : {},
			unitsTemplate: ['nazwa','opis','symbol','nadrzędny'],
			workersTemplate: ['Imię','Nazwsko','Stanowisko','Inicjały','Email','Login','LoginAD','Symbol'],

			units: CsvFileAPI.getUnits(),
			csvErrorsList: []
		}
	},

	componentDidUpdate: function () {
		CsvFileAPI.setUnits(this.state.units);
	},

	handleDataChange: function(data){
		this.setState({
			displayCSV: true,

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

	handleSettings: function(dataTemplateType){
		var template = [];
		var map = {};

		switch (dataTemplateType) {
			case 'jednostki':
				template = this.state.unitsTemplate;
			break;	
			case 'pracownicy':
				template = this.state.workersTemplate;
			break;
		}

		if (template.length > 0){
			for (let i = 0; i < template.length; i++) {
				map = {
					...map,
					[template[i]] : 'undefined'
				}
			}			
		}

		CsvFileAPI.removeUnits();

		this.setState({
			dataMapping: map,
			dataTemplateType,
			csvErrorsList: []
		});
	},

	handleMapping:function(templateCol, csvCol) {
		var map = this.state.dataMapping;
		map = {
			...map,
			[templateCol]: csvCol
		};
		this.setState({
			dataMapping: map
		});
	},

	handleSetObjects: function(){
		var template = this.state.dataTemplateType;
		var map = this.state.dataMapping;
		var columns = this.state.columns;
		var data = this.state.data;

		var csvErrList = [];	

		// sprawdzenie 
		// dataMapping warości nie mogą być undefined

		if (Object.keys(map).length !== columns.length) {
			csvErrList[0] = csvErrList[0] + 'sprawdź nagłówki csv';
		}

		console.log('nagłówki csv nie pasują do szablony danych', Object.keys(map).length, columns.length);

		var units = [];
		//create units
		if (csvErrList.length === 0) {
			for (let i = 0; i < data.length; i++){
				var csvUnit = data[i];
				var unit = {
					id: uuid()
				};
				Object.keys(map).forEach((attr) => {								
					unit = {
						...unit,
						[attr]: csvUnit[map[attr]]
					};
				});
				units = [
					...units,
					unit
				];			
			}		
		} //end create units

		CsvFileAPI.setUnits(units);

	},

	render: function () {
		var {displayCSV, data, columns, totalCount} = this.state;
		var {dataMapping, csvErrorsList} = this.state;

		return (
			<div className="conteiner">
				<div className="row">
					<CsvFileSettings
						columns={columns}
						dataMapping={dataMapping}		
						columns={columns}
						onChangeSettings={this.handleSettings}
						onChangeMapping={this.handleMapping}
						onFileChange={this.handleFileSelection}
						onSetObjects={this.handleSetObjects}
					/>
				</div>
				<div className="row">
					<CsvContent displayCSV={displayCSV} data={data} columns = {columns} csvErrorsList={csvErrorsList} />
                </div>
                <div className="row">
				</div>
			</div>
		);
	}
});

module.exports = CsvFile;
