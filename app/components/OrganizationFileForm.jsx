var React = require('react');

var OrganizationFileForm = React.createClass({
  onFileInputChange: function(e) {
    e.preventDefault();
    var selectedFile = e.target.files[0];
    this.props.onFileChange(selectedFile);
  },

  render: function(){
    return(
      <div>
        <input type="file" onChange={this.onFileInputChange} accept=".csv" />
      </div>
    );
  }
});

module.exports = OrganizationFileForm;
