var assert = require('chai').assert,
	BaseElement = require('../dist/baseElement');

describe('baseElement', function() {
	var baseElement = new BaseElement();

	describe('addChild', function() {
		it('should exist', function() {
			assert.isFunction(baseElement.addChild);
		});
	});
});
