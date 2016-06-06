import BaseElement from './baseElement';
import {SPACE_CHARACTER} from './constants';

export default class LineElement extends BaseElement {
	render() {
		return [new Array(this.width).fill(SPACE_CHARACTER)];
	}
}
