var redux = require('redux');
// require todos here

// config the redux store to hold state
export var configure = (state = {}) => {
  var reducer = redux.combineReducers({
    // combine reducers here
  });

  var store = redux.createStore(reducer, state, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};