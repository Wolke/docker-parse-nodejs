import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

let store = createStore(todos, ['Use Redux'])

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
})

import { App } from './components/App';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("content"))
