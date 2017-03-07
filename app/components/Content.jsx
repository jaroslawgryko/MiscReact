var React = require('react');

var Content = React.createClass({

    render: function(){
        var {dataTemplateType} = this.props;

        return (
            <div>
              <p>{dataTemplateType}</p>
            </div>
        )
    }
});

module.exports = Content;
