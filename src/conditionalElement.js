import ContainerElement from './containerElement';

export default class TableColumn extends ContainerElement {
	constructor(options) {
		super(options);
		this.min = options.min;
		this.max = options.max;
	}

	render() {
		if (
			this.width >= this.min &&
			this.width <= this.max
		) {
			return super.render();
		}

		return [];
	}
}
