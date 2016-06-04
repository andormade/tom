export default class BaseElement {
	constructor(options) {
		this.children = [];
		if (options.width) {
			this.width = options.width;
		}
	}

	resize(width) {
		this.width = width;

		this.children.forEach((child) => {
			child.resize(this.width);
		}, this);
	}

	render() {
		return [];
	}

	addChild(child) {
		child.resize(this.width);
		this.children.push(child);
	}
}