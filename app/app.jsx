var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
    var state = store.getState();
    console.log('New state', state);

});


var Csv = require('Csv');
var CsvFile = require('CsvFile');
var Organization = require('Organization');
var Misc = require('Misc');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>

        <Router history={hashHistory}>
            <Route path="/" component={Main}>
              <Route path="csv" component={Csv}/>
              <Route path="csvfile" component={CsvFile}/>
              <Route path="organization" component={Organization}/>
              <Route path="misc" component={Misc}/>
              <IndexRoute component={Csv}/>
            </Route>
        </Router>
      
  </Provider>,
  document.getElementById('app')
);
