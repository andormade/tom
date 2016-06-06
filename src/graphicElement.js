import BaseElement from './baseElement';
import Utils from './utils';
import {NEW_BACKGROUND} from './constants';

export default class GraphicElement extends BaseElement {
	constructor(options = {}) {
		super(options);
		this.graphic = options.graphic;
		this.color = options.color;
		this.backgroundColor = options.backgroundColor;
	}

	render() {
		let prefix = this._getPrefix();
		let data = [];

		this.graphic.forEach((line, i) => {
			data[i] = prefix.concat(line);
		});

		return data;
	}

	_getPrefix() {
		let prefix = [];
		if (this.backgroundColor) {
			prefix.push(Utils.getMosaicsColor(this.backgroundColor));
			prefix.push(NEW_BACKGROUND);
		}
		if (this.color) {
			prefix.push(Utils.getMosaicsColor(this.color));
		}
		else {
			prefix.push(Utils.getMosaicsColor('white'));
		}
		return prefix;
	}
}
