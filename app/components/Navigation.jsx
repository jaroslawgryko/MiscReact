var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Misc App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Organizacja</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/misc" activeClassName="active-link">Misc</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">R</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
