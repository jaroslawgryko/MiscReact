var React = require('react');

var Table = React.createClass({
    render: function(){
        return (
            <table>
                <Head columns={this.props.columns}/>
                <Body columns={this.props.columns} data={this.props.data}/>
            </table>
        );
    }
});

var Head = React.createClass({
  render: function(){
    return (
      <thead>
        <tr>{this.props.columns.map(column => <th key={column}>{column}</th>)}</tr>
      </thead>
    );
  }
});

var Body = React.createClass({
  render: function(){
    var i = 0;
    return(
      <tbody>
        {this.props.data.map(r => <Row key={i++} data={r} columns={this.props.columns} />)}
      </tbody>
    );
  }
});

var Row = React.createClass({
  render: function(){
    return(
      <tr>
        {this.props.columns.map(h => <td key={h}>{this.props.data[h]}</td>)}
      </tr>
    );
  }
});

var CsvFileContent = React.createClass({
  render: function(){
      var {data, columns, totalCount} = this.props;
      return(
          <div>
              Wczytano: {totalCount} <br/>
            <Table data={data} columns={columns}/>
          </div>
      );
  }
});

module.exports = CsvFileContent;
