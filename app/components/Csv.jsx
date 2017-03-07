var React = require('react');

import DataType from 'DataType';
var Content = require('Content');

var Csv = React.createClass({

    getInitialState: function(){
        return {
            dataTemplateType: 'cos'
        }
    },

    handleSettings: function(dataTemplateType) {
        this.setState({
           dataTemplateType
        });
    },

    render: function(){
        var {dataTemplateType} = this.state;
        return (
            <div className="conteiner">
                <div className="row">
                    <div className="large-2 columns">
                      <DataType/>
                    </div>
                    <div className="large-2 columns">
                      <p> wybór pliku</p>
                    </div>
                    <div className="large-10 columns"></div>
                </div>
                <div className="row">
                    <Content dataTemplateType={dataTemplateType}/>
                </div>
            </div>
        )
    }
});

module.exports = Csv;
