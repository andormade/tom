import BaseElement from './baseElement';

const SPACE_CHARACTER = 32;

export default class LineElement extends BaseElement {
	render() {
		return [new Array(this.width).fill(SPACE_CHARACTER)];
	}
}
