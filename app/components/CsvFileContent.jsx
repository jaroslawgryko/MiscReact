var React = require('react');

var Table = React.createClass({
    render: function(){
        return (
            <table>
                <Head
                    columns={this.props.columns}
                    dataTemplateType={this.props.dataTemplateType}
                    dataTemplate={this.props.dataTemplate}
                    dataMapping={this.props.dataMapping}
                />
                <Body columns={this.props.columns} data={this.props.data}/>
            </table>
        );
    }
});

var Head = React.createClass({
  handleMappingsChange: function(){
    var column = this.refs.column;
    console.log(column);
  },
  render: function(){
    var {columns, dataTempleType, dataTemplate, dataMapping} = this.props;

    return (
      <thead>
        <tr>
            {columns.map(column => <th key={column}>{column}</th>)}
        </tr>
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
      var {data, columns, totalCount, dataTemplateType, dataTemplate, dataMapping} = this.props;
      return(
          <div>
            <Table data={data} columns={columns}
                   dataTemplateType={dataTemplateType}
                   dataTemplate={dataTemplate}
                   dataMapping={dataMapping}
            />
          </div>
      );
  }
});

module.exports = CsvFileContent;
