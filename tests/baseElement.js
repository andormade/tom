var assert = require('chai').assert,
	BaseElement = require('../dist/baseElement');

describe('baseElement', function() {
	beforeEach(function() {
		this.root = new BaseElement();
		this.child = new BaseElement({id: 'child', class: 'child'});
		this.chile = new BaseElement({id: 'chile', class: 'child'});
		this.chilf = new BaseElement({id: 'chilf', class: 'child'});
	});

	describe('addChild', function() {
		it('should exist', function() {
			assert.isFunction(this.root.addChild);
		});

		it('should add the child', function() {
			this.root.addChild(this.child);
			assert.equal(this.root.children[0], this.child);
		});
	});

	describe('getElementsByClass', function() {
		it('should have no child', function() {
			assert.lengthOf(this.root.getElementsByClass('child'), 0);
		});

		it('should have 3 children', function() {
			this.root.addChild(this.child)
				.addChild(this.chile)
				.addChild(this.chilf);

			assert.lengthOf(this.root.getElementsByClass('child'), 3);
		});
	});

	describe('getElementById', function() {
		it('should return chilf', function() {
			this.root.addChild(this.chilf);
			assert.equal(this.root.getElementById('chilf'), this.chilf);
		});
	});

	afterEach(function() {
		delete this.root;
		delete this.child;
	});
});
