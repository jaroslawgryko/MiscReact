var React = require('react');

var Unit = React.createClass({
  render: function(){
    var {id, nazwa, symbol, nadrzędny} = this.props;
    return (
      <tr>
        <td>{nazwa}</td>
        <td onClick={()=>{
          this.props.onClick(id);}}>
            {symbol}
        </td>
        <td>{nadrzędny}</td>
      </tr>
    );
  }
});

module.exports = Unit;
