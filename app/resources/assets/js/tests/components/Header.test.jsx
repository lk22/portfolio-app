var React = require('react');
var ReactDOM = requie('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = requier('expect');

var Header = require('Header');

describe('Header component', () => {
	it('should exist', () => {
		expect(Header).toExist();
	});
});