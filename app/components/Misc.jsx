var React = require('react');

var Misc = React.createClass({
    render: function(){
        return (
            <ul className="accordion" data-accordion>
                <li className="accordion-item is-active" data-accordion-item>
                    <a href="#" className="accordion-title">Accordion 1</a>
                    <div className="accordion-content" data-tab-content>
                        Accordion 1 contente.
                    </div>
                </li>
                <li className="accordion-item" data-accordion-item>
                    <a href="#" className="accordion-title">Accordion 2</a>
                    <div className="accordion-content" data-tab-content>
                        Accordion 2 contente.
                    </div>
                </li>
                <li className="accordion-item" data-accordion-item>
                    <a href="#" className="accordion-title">Accordion 3</a>
                    <div className="accordion-content" data-tab-content>
                        Accordion 3 contente.
                    </div>
                </li>
            </ul>
        );
    }
});

module.exports = Misc;
