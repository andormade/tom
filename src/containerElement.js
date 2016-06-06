import BaseElement from './baseElement';

export default class ContainerElement extends BaseElement {
	render() {
		return this.renderChildren();
	}

	renderChildren() {
		let data = [];
		this.children.forEach((child) => {
			data = data.concat(child.render());
		});
		return data;
	}
}
