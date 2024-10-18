// Kolla i process.argv vilken rad och kolumn
function getPosition() {
	x = process.argv[3];
	y = process.argv[2];
	return { x, y };
}
// Kolla att värderna är ok
function validateInput({ x, y }) {
	if (Number.isNaN(Number(x)) || Number(x) < 1 || Number(x) > 3) {
		throw new Error("Invaldig input for x");
	}
	if (Number.isNaN(Number(y)) || Number(y) < 1 || Number(y) > 3) {
		throw new Error("Invaldig input for y");
	}
	return { x: Number(x) - 1, y: Number(y) - 1 };
}
// Skapa tabell
function makeMove(pos) {
	// pos: { x: 1, y: 1 }
	const table = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	table[pos.y][pos.x] = 1;
	return table;
}
// Använd rätt symbol
function getSymbol(table, pos) {
	if (table[pos.y][pos.x] == 1) {
		return "X";
	}
	return " ";
}
// Skriv ut tabell
function renderTable(table) {
	for (const y in table) {
		let output = "|";
		for (const x in table[y]) {
			output += getSymbol(table, { x, y }) + "|";
		}
		console.log(output);
	}
}

function main() {
	const pos = validateInput(getPosition());
	const table = makeMove(pos);
	renderTable(table);
}
main();
