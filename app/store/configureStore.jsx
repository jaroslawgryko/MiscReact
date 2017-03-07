var redux = require('redux');
var {setDataTemplateTypeReducer} = require('reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        dataTemplateType: setDataTemplateTypeReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));

    return store;
};
