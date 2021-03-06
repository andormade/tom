export default class BaseElement {
	constructor(options = {}) {
		this.children = [];
		if (options.width) {
			this.width = options.width;
		}
		this.id = options.id
		this.class = options.class;
	}

	resize(width) {
		this.width = width;
		this.resizeChildren(width);
		return this;
	}

	resizeChildren(width) {
		this.children.forEach((child) => {
			child.resize(width);
		}, this);
	}

	render() {
		return [new Array(this.width).fill(32)];
	}

	addChild(children) {
		Array.prototype.concat(children).forEach((child) => {
			child.resize(this.width);
			this.children.push(child);
		});

		return this;
	}

	getElementById(id) {
		let element = null;
		if (this.id === id) {
			element = this;
		}
		this.children.forEach((child) => {
			if (child.id === id) {
				element = child;
				return;
			}
			else if (child.getElementById(id) !== null) {
				element = child.getElementById(id);
				return;
			}
		});
		return element;
	}

	getElementsByClass(className) {
		let children = [];
		if (this.class === className) {
			children.push(this);
		}
		this.children.forEach((child) => {
			if (child.class === className) {
				children.push(child);
			}
			else if (child.getElementsByClass(className).length !== 0) {
				children = children.concat(child.getElementsByClass(className))
			}
		});

		return children;
	}
}
