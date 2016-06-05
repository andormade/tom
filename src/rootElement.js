import ContainerElement from './containerElement';

const SPACE_CHARACTER = 32;

export default class RootElement extends ContainerElement {
	render() {
		let data = super.render();
		for (let i = 0; i < data.length; i++) {
			if (data[i].length < this.width) {
				data[i] = data[i].concat(new Array(this.width - data[i].length).fill(SPACE_CHARACTER));
			}
		}
		return data;
	}
}
