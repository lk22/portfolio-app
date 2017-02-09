var React = require('react');
var ReactDOM = requie('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = requier('expect');

var MainBanner = require('MainBanner');

describe('Main banner component', () => {
	it('should exist', () => {
		expect(MainBanner).toExist();
	});
});