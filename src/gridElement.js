import ContainerElement from './containerElement';
import GridColumnElement from './gridColumnElement';
import {SPACE_CHARACTER} from './constants';
import Utils from './utils';

export default class GridElement extends ContainerElement {
	resizeChildren(width) {
		super.resizeChildren(Math.floor(width / this.children.length));
	}

	renderChildren() {
		let data = [];
		this.children.forEach((child, index) => {
			Utils.merge2dArray(
				data,
				child.render(),
				index * Math.floor(this.width / this.children.length)
			);
		});
		return data;
	}

	addChild(child) {
		if (child instanceof GridColumnElement) {
			super.addChild(child);
		}
		return this;
	}
}
