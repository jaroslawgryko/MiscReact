var React = require('react');


var CsvFileSettings = React.createClass({

  onFileInputChange: function(e) {
    e.preventDefault();
    var selectedFile = e.target.files[0];
    this.props.onFileChange(selectedFile);
  },
  handleSettingsChange: function(e){
      e.preventDefault();
    var templateType = this.refs.templateType.value;
    this.props.onChangeSettings(templateType);
  },

  handleMappingsChange: function(column, e){     
    // console.log(column);
    // console.log(e.target.value);
    this.props.onChangeMapping(e.target.value, column);
  },

    handleCreateObjects: function(e) {
        e.preventDefault();
      this.props.onSetObjects();
    },

  render: function() {
    var {columns, dataMapping} = this.props;

    var createOptions = () => {
        var items = [];
        items.push(<option key="wybierz" value="wybierz">wybierz</option>)
        if (dataMapping!=null) {

          Object.keys(dataMapping).forEach((attr)=>{            
            items.push(
                <option key={attr} value={attr}>{attr}</option>
            );
          });
        } else {
          items.push(<option key="wybierz" value="wybierz">wybierz szablon</option>)
        }
        return items;
    };    

    return (
        <div>
          <div className="row">
              <div className="large-2 columns">
                  <label htmlFor="csvFileUpload" className="button">Załaduj csv</label>
                  <input type="file" id="csvFileUpload" onChange={this.onFileInputChange} accept=".txt,.csv" className="show-for-sr" />
              </div>
              <div className="large-2 columns">
                <select ref="templateType" onChange={this.handleSettingsChange}>
                  <option value="wybierz">Wybierz szablon</option>
                  <option value="jednostki">Jednostki</option>
                  <option value="pracownicy">Pracownicy</option>
                </select>
              </div>
              <div className="large-6 columns"></div>
              <div className="large-2 columns">
                <button className="button" onClick={this.handleCreateObjects}>Generuj</button>
              </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <ul className="menu align-left">
                {columns.map(column =>
                  <div key={column} className="mapping-menu">
                    <div>{column}:</div>
                    <select ref={column} onChange={this.handleMappingsChange.bind(null, column)}>
                        {createOptions()}
                    </select>
                  </div>)}                
              </ul>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = CsvFileSettings;
