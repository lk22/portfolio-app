// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, HashHistory, browserHistory} = require('react-router');
import { syncHistoryWithStore } from 'react-router-redux';
// redux store
var store = require('store').configure({});

// page components
import Main from 'Main';
import About from 'About';
import Projects from 'Projects';

const history = syncHistoryWithStore(browserHistory, store);

// render application with react Router
ReactDOM.render(
  	<Provider store={store}>
  		<Router history={history}>
	      <Route path="/" component={Main}></Route>
	      <Route path="/about" component={About} />
	      <Route path="/examples" component={Projects} />
    	</Router>
  	</Provider>,
  	document.getElementById('app')
);
