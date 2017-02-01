var React = require('react');
var Unit = require('Unit');

var OrganizationList = React.createClass({
  render: function(){
    var {unitsList} = this.props;
    var renderUnits = () => {
      return unitsList.map((unit) => {
        return (
          <Unit key={unit.id} {...unit} onClick={this.props.onClick}/>
        );
      });
    };
    return(
      <div>
        {renderUnits()}
      </div>
    );
  }
});

module.exports = OrganizationList;
