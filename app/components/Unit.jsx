var React = require('react');

var Unit = React.createClass({
  render: function(){
    var {id, nazwa, opis, symbol, nadrzedny} = this.props;
    return (
      <div onClick={()=>{
        this.props.onClick(id);
      }}>
        {id} {nazwa} {opis} {symbol} {nadrzedny}
      </div>
    );
  }
});

module.exports = Unit;
