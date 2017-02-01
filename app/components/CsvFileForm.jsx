var React = require('react');

var CsvFileForm = React.createClass({
    onFileInputChange: function(e) {
    e.preventDefault();
    var selectedFile = e.target.files[0];
    this.props.onFileChange(selectedFile);
},

render: function(){
    return(
        <div>
            <input type="file" onChange={this.onFileInputChange} accept=".txt,.csv" />
        </div>
    );
  }
});

module.exports = CsvFileForm;
