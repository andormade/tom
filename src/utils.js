import {ALPHA_BLACK, ALPHA_RED, ALPHA_GREEN, ALPHA_YELLOW, ALPHA_BLUE,
	ALPHA_MAGENTA, ALPHA_CYAN, ALPHA_WHITE, MOSAICS_BLACK, MOSAICS_RED,
	MOSAICS_GREEN, MOSAICS_YELLOW, MOSAICS_BLUE, MOSAICS_MAGENTA,
	MOSAICS_CYAN, MOSAICS_WHITE, SPACE_CHARACTER} from './constants';

const ALPHA_COLORS = {
	'black'   : ALPHA_BLACK,
	'red'     : ALPHA_RED,
	'green'   : ALPHA_GREEN,
	'yellow'  : ALPHA_YELLOW,
	'blue'    : ALPHA_BLUE,
	'magenta' : ALPHA_MAGENTA,
	'cyan'    : ALPHA_CYAN,
	'white'   : ALPHA_WHITE
};

const MOSAICS_COLORS = {
	'black'   : MOSAICS_BLACK,
	'red'     : MOSAICS_RED,
	'green'   : MOSAICS_GREEN,
	'yellow'  : MOSAICS_YELLOW,
	'blue'    : MOSAICS_BLUE,
	'magenta' : MOSAICS_MAGENTA,
	'cyan'    : MOSAICS_CYAN,
	'white'   : MOSAICS_WHITE
};

export default class Utils {
	static getAlphaColorSelector(color) {
		return ALPHA_COLORS[color];
	}

	static getMosaicsColor(color) {
		return MOSAICS_COLORS[color];
	}

	static merge2dArray(destination, source, offsetX = 0, offsetY = 0) {
		for (let row = offsetY; row < offsetY + source.length; row++) {
			if (typeof destination[row] === 'undefined') {
				destination[row] = [];
			}
			for (let col = 0; col < offsetX + source[row - offsetY].length; col++) {
				if (
					typeof destination[row][col] === 'undefined' &&
					(col < offsetX || row < offsetY)
				) {
					destination[row][col] = SPACE_CHARACTER;
				}
				else if (row >= offsetY && col >= offsetX) {
					destination[row][col] = source[row - offsetY][col - offsetX];
				}
			}
		}
		return destination;
	}
}
