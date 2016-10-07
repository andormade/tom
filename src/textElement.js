import BaseElement from './baseElement';
import Utils from './utils';
import {} from './constants';

export default class TextElement extends BaseElement {
	constructor(options = {}) {
		super(options);
		this.text = options.text;
		this.color = options.color;
		this.backgroundColor = options.backgroundColor;
		this.resetBackground = options.resetBackground;
	}

	render() {
		return Utils.characterCode(
			this._formatText(this.text, this.width, this.color,
				this.backgroundColor)
		);
	}

	/**
	 *
	 * @returns {array}
	 */
	_formatText(text, width, color, backgroundColor) {
		let words = text.split(' ');
		let row = 0;
		let rows = [];
		let pre = Utils.getAlphaRowPrefix(color, backgroundColor);

		rows[0] = [].concat(pre);

		words.forEach((word) => {
			word += ' ';
			if (rows[row].length + word.length >= width) {
				rows[++row] = [].concat(pre);
			}
			rows[row] = rows[row].concat(word.split(''));
		}, this);

		return rows;
	}
}
