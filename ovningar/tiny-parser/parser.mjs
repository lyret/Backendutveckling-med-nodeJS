import chalk from "chalk";
const incommingData = `
# Incheck
> all things are nice and good happy face :)
Detta är en check in
> all things are nice and good happy face :)
# Incheck
Detta är en check in
> all things are nice and good happy face :)
`;

const rows = incommingData.split("\n");

for (const row of rows) {
	if (!row.length) {
		continue;
	}
	if (row.indexOf("#") == 0) {
		const output = row.toUpperCase().substring(2);
		console.log(chalk.bold(output));
	} else if (row.indexOf(">") == 0) {
		const output = row.toUpperCase().substring(2);
		console.log(chalk.bgBlack(output));
	} else {
		console.log(row);
	}
}
