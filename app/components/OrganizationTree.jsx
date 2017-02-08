var React = require('react');

var OrganizationTree = React.createClass({
  render: function () {
    var {nodes} = this.props;

    var renderNodes = () => {
      var childNodes;

      if (this.props.node.childNodes != null){
        childNodes = this.props.node.childNodes.map(function(node){
          return <li key={node.id}><OrganizationTree node={node} /> </li>
        });
      }

      return(
        <div>
          {this.props.node.symbol} {this.props.node.nazwa}
          <ul>
            {childNodes}
          </ul>
        </div>
      );
    };

    return (
        <div>
          {renderNodes()}
        </div>
    );
  }
});

module.exports = OrganizationTree;
