const fs = require("fs/promises");

async function readFile() {
	const fileContents = await fs.readFile("./board", { encoding: "utf8" });
	return fileContents;
}

function createTableFromText(text) {
	return text.split("\n").map((rowText) =>
		rowText
			.split("|")
			.filter((char) => char.length)
			.map((char) => {
				switch (char) {
					case " ":
						return 0;
					case "X":
						return 1;
					default:
						throw new Error("Unknown character in table");
				}
			})
	);
}

async function hasXAtPos({ x, y }, table) {
	return table[y][x] == 1;
}

async function main() {
	const y = process.argv[2];
	const x = process.argv[3];
	const data = await readFile();
	const table = await createTableFromText(data);
	console.log(
		(await hasXAtPos({ x: Number(x), y: Number(y) }, table)) ? "Ja" : "Nej"
	);
}
main();

// Fortsätt utveckla getBoard med en funktion
// som läser filens innehåll (board) tecken för tecken
// man ska kunna fråga getBoard (exempelvis via en funktion)
// om en ruta på tic-tac-toe brädet har ett X eller inte
// isOccupied(x,y) - i.e isOccupied(0,0)
