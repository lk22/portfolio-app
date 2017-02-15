import React from 'react';

export var Project = React.createClass({

	getDefaultProps: function() {
		return {
			classOne: 'col-md-6',
			classTwo: 'col-md-6',
			imgHeight: "500",
			imgWidth: "500"
		};
	},

	render: function() {
		return (
			<div className="project container">
				<div className={this.props.classONe}>
					<div className="project__img">
						<img src={this.props.image} height={this.props.imgHeight} width={this.props.imgWidth} alt=""/>
					</div>

				</div>
				<div className={this.props.classTwo}>
					<div className="project__title">
						<h3>{this.props.title}</h3>
					</div>

					<div className="project__link">
						<a href={this.props.link}> {this.props.link} </a>
					</div>

					<div className="project__description">
						<h4>{this.props.description}</h4>
					</div>
				</div>
			</div>
		);
	}
});

export default Project;