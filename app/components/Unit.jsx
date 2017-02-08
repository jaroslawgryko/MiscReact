var React = require('react');

var Unit = React.createClass({
  render: function(){
    var {id, nazwa, symbol, nadrzedny} = this.props;
    return (
      <tr>
        <td>{nazwa}</td>
        <td onClick={()=>{
          this.props.onClick(id);}}>
            {symbol}
        </td>
        <td>{nadrzedny}</td>
      </tr>
    );
  }
});

module.exports = Unit;
