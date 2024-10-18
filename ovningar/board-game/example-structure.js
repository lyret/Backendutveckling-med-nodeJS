class Table {
	constructor() {
		this.symbols = new Map();
	}

	validateMove({ x, y }) {
		if (Number.isNaN(Number(x)) || Number(x) < 1 || Number(x) > 3) {
			throw new Error("Invaldig input for x");
		}
		if (Number.isNaN(Number(y)) || Number(y) < 1 || Number(y) > 3) {
			throw new Error("Invaldig input for y");
		}
		if (this.symbols.has(`${y}:${x}`)) {
			throw new Error("Position is occupied");
		}
	}

	makeMove({ x, y }, symbol) {
		this.validateMove(pos);
		this.symbols.set(`${y}:${x}`, symbol);
	}

	getSymbol({ x, y }) {
		if (this.symbols.has(`${y}:${x}`)) {
			return this.symbols.get(`${y}:${x}`);
		}
		return " ";
	}

	print() {
		for (let y = 1; y <= 3; y++) {
			let str = "|";
			for (let x = 1; x <= 3; x++) {
				str += this.getSymbol({ x, y });
				str += "|";
			}
			console.log(str);
		}
	}
}
