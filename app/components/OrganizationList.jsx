var React = require('react');
var Unit = require('Unit');

var OrganizationList = React.createClass({
  render: function(){
    var {units} = this.props;
    var renderUnits = () => {
      return units.map((unit) => {
        return (
              <Unit key={unit.id} {...unit} onClick={this.props.onClick}/>
        );
      });
    };
    return(
      <table>
        <thead>
          <tr>
            <th>Nazwa jednostki</th>
            <th>Symbol</th>
            <th>Nadrzędny</th>
          </tr>
        </thead>
        <tbody>
        {renderUnits()}
        </tbody>
      </table>
    );
  }
});

module.exports = OrganizationList;
