var React = require('react');
var { connect } = require('react-redux');

export var Component = React.createClass({
	// get initial state
	getInitialState = () => {
		return {
			// state properties
		};
	},

	// render component
	render: () =>  {
		return (
			<div>
				<p>Component</p>
			</div>
		);
	}
});

export default connect()(Component);
