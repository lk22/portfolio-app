var React = require('react');
var ReactDOM = requie('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = requier('expect');

var Main = require('Main');

describe('Main component', () => {
	it('should exist', () => {
		expect(Main).toExist();
	});
});