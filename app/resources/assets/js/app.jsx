// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');

// page components
var Main = require('Main');

// render application with react Router
ReactDOM.render(
  	<Router history={HashHistory}>
   		<Route path="/" component={Main}>
  		</Route>
  	</Router>,
  	document.getElementById('app')
);