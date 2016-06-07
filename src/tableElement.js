import ContainerElement from './containerElement';
import TableColumnElement from './tableColumnElement';
import {SPACE_CHARACTER} from './constants';
import Utils from './utils';

export default class TableElement extends ContainerElement {
	constructor(options) {
		super(options);
		this.minColWidth = options.minColWidth;
	}

	resizeChildren(width) {
		this.numCols = this.children.length;
		this.colsize = Math.floor(width / this.numCols);

		while (this.colsize < this.minColWidth && this.numCols > 1) {
		 	this.numCols--;
		 	this.colsize = Math.floor(width / this.numCols);
		}

		super.resizeChildren(this.colsize);
	}

	renderChildren() {
		let data = [];
		let offsetY = 0;
		let offsetX = 0;

		this.children.forEach((child, index) => {
			if (index % this.numCols === 0) {
				offsetY += data.length;
			}
			offsetX = (index % this.numCols) * this.colsize;
			Utils.merge2dArray(
				data,
				child.render(),
				offsetX,
				offsetY
			);
		});
		return data;
	}



	addChild(child) {
		if (child instanceof TableColumnElement) {
			super.addChild(child);
		}
		return this;
	}
}
