import Element from './baseElement';

export default class TextElement extends BaseElement {
	constructor(options) {
		super(options);
		this.text = options.text;
		this.color = options.color;
	}

	render() {
		let data = Text.characterCode(
			Text.formatText(this.text, this.width, this.color)
		);

		return data;
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
