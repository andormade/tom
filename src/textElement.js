import BaseElement from './baseElement';

export default class TextElement extends BaseElement {
	constructor(options) {
		super(options);
		this.text = options.text;
		this.color = options.color;
		this.resetBackground = options.resetBackground;
	}

	render() {
		return TextElement.characterCode(
			TextElement.formatText(this.text, this.width, this.color)
		);
	}

	/**
	 *
	 * @returns {array}
	 */
	static formatText(text, width, color) {
		let words = text.split(' ');
		let row = 0;
		let rows = [];
		rows[0] = [color];

		if (this.resetBackground) {
			rows[1] = 0x4;
		}

		words.forEach((word) => {
			word += ' ';
			if (rows[row].length + word.length >= width) {
				rows[++row] = [color];
			}
			rows[row] = rows[row].concat(word.split(''));

		}, this);

		return rows;
	}

	/**
	 *
	 *
	 * @returns {array}
	 */
	static characterCode(chars) {
		for (let i = 0; i < chars.length; i++) {
			if (Array.isArray(chars[i])) {
				chars[i] = this.characterCode(chars[i]);
			}
			else if (typeof chars[i] === 'string') {
				chars[i] = chars[i].charCodeAt(0);
			}
		}

		return chars;
	}
}
