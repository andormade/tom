import {ALPHA_BLACK, ALPHA_RED, ALPHA_GREEN, ALPHA_YELLOW, ALPHA_BLUE,
	ALPHA_MAGENTA, ALPHA_CYAN, ALPHA_WHITE, MOSAICS_BLACK, MOSAICS_RED,
	MOSAICS_GREEN, MOSAICS_YELLOW, MOSAICS_BLUE, MOSAICS_MAGENTA,
	MOSAICS_CYAN, MOSAICS_WHITE, SPACE_CHARACTER,
	NEW_BACKGROUND} from './constants';

const COLOR_BLACK = 'black';
const COLOR_RED = 'red';
const COLOR_GREEN = 'green';
const COLOR_YELLOW = 'yellow';
const COLOR_BLUE = 'blue';
const COLOR_MAGENTA = 'magenta';
const COLOR_CYAN = 'cyan';
const COLOR_WHITE = 'white';

const ALPHA_COLORS = {
	[COLOR_BLACK]   : ALPHA_BLACK,
	[COLOR_RED]     : ALPHA_RED,
	[COLOR_GREEN]   : ALPHA_GREEN,
	[COLOR_YELLOW]  : ALPHA_YELLOW,
	[COLOR_BLUE]    : ALPHA_BLUE,
	[COLOR_MAGENTA] : ALPHA_MAGENTA,
	[COLOR_CYAN]    : ALPHA_CYAN,
	[COLOR_WHITE]   : ALPHA_WHITE
};

const MOSAICS_COLORS = {
	[COLOR_BLACK]   : MOSAICS_BLACK,
	[COLOR_RED]     : MOSAICS_RED,
	[COLOR_GREEN]   : MOSAICS_GREEN,
	[COLOR_YELLOW]  : MOSAICS_YELLOW,
	[COLOR_BLUE]    : MOSAICS_BLUE,
	[COLOR_MAGENTA] : MOSAICS_MAGENTA,
	[COLOR_CYAN]    : MOSAICS_CYAN,
	[COLOR_WHITE]   : MOSAICS_WHITE
};

export default class Utils {
	static getAlphaColorSelector(color) {
		if (typeof ALPHA_COLORS[color] !== 'undefined') {
			return ALPHA_COLORS[color];
		}
		else {
			console.trace('error, no such color', color);
			return ALPHA_COLORS[COLOR_WHITE];
		}
	}

	static getMosaicsColor(color) {
		if (typeof MOSAICS_COLORS[color] !== 'undefined') {
			return MOSAICS_COLORS[color];
		}
		else {
			console.trace('error, no such color', color);
			return MOSAICS_COLORS[COLOR_WHITE];
		}
	}

	static getMosaicRowPrefix(color, backgroundColor) {
		let prefix = [];
		if (backgroundColor) {
			prefix.push(Utils.getMosaicsColor(backgroundColor));
			prefix.push(NEW_BACKGROUND);
		}
		if (color) {
			prefix.push(Utils.getMosaicsColor(color));
		}
		return prefix;
	}

	static getAlphaRowPrefix(color, backgroundColor) {
		let prefix = [];
		if (backgroundColor) {
			prefix.push(Utils.getAlphaColorSelector(backgroundColor));
			prefix.push(NEW_BACKGROUND);
		}
		if (color) {
			prefix.push(Utils.getAlphaColorSelector(color));
		}
		return prefix;
	}

	static merge2dArray(destination, source, offsetX = 0, offsetY = 0) {
		for (let row = 0; row < offsetY + source.length; row++) {
			if (typeof destination[row] === 'undefined') {
				destination[row] = [];
			}
			if (row >= offsetY) {
				for (let col = 0; col < offsetX + source[row - offsetY].length;
					col++) {
					if (col >= offsetX) {
						destination[row][col] =
							source[row - offsetY][col - offsetX];
					}
					else if (typeof destination[row][col] === 'undefined') {
						destination[row][col] = SPACE_CHARACTER;
					}
				}
			}
		}
		return destination;
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
