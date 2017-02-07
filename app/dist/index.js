"use strict";
var React = require("react");
var ReactDom = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();
function todos(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}
var store = redux_1.createStore(todos, ['Use Redux']);
store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
});
var App_1 = require("./components/App");
ReactDom.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.App, null)), document.getElementById("content"));
