const FS = require("fs");
const FSwithPromises = require("fs/promises");

// Det gamla sättet att jobba - men som är mest "sant"
function mainWithOldFS(callback) {
	FS.readFile("./board", { encoding: "utf-8" }, (err, data) => {
		if (err) {
			console.error(err);
			callback(false);
			return;
		}
		FS.writeFile(
			"./board2",
			data.toLowerCase(),
			{ encoding: "utf-8" },
			(err) => {
				if (err) {
					console.error(err);
					callback(false);
					return;
				} else {
					callback(true);
					return;
				}
			}
		);
	});
}

// Vad som händer bakom async / await
async function mainWithOldFSButWithPromises() {
	return new Promise((resolve, reject) => {
		FS.readFile("./board", { encoding: "utf-8" }, (err, data) => {
			if (err) {
				return reject(err);
			}
			FS.writeFile(
				"./board2",
				data.toLowerCase(),
				{ encoding: "utf-8" },
				(err) => {
					if (err) {
						return reject(err);
					} else {
						return resolve(true);
					}
				}
			);
		});
	});
}

// Det moderna sättet att skriva, men som gömmer
async function mainWithNewFS() {
	try {
		const data = await FSwithPromises.readFile("./board", {
			encoding: "utf-8",
		});
		await FSwithPromises.writeFile("./board3", data.toLowerCase(), {
			encoding: "utf-8",
		});
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
}

// Promises utan async / await
const res = mainWithOldFSButWithPromises()
	.then((res) => {
		console.log("1", res);
	})
	.catch((err) => {
		console.error("err", err);
	});

// Fetch utan async / await

//const data = fetch("url").then((res) => res.json());
