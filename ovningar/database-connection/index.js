const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost/";
const client = new MongoClient(url);

// Exempel på "Repository" Pattern
class Events {
	constructor(dbConnection) {
		const collectionName = "events";
		this._collection = dbConnection.collection(collectionName);
	}

	async findPublicEvents() {
		const results = await this._collection.find({ private: false });
		const documents = await results.toArray();
		return documents;
	}
	async findPrivateEvents() {
		const results = await this._collection.find({ private: true });
		const documents = await results.toArray();
		return documents;
	}
	async createNewEvent(name) {
		const results = await this._collection.insertMany([
			{ name, private: false },
		]);
		return results;
	}
}

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log("Connected successfully to server");
	const dbName = "frontend2023";
	const dbConnection = client.db(dbName);

	const events = new Events(dbConnection);

	await events.createNewEvent(process.argv[2] || "inget namn :_(");
	const documents = await events.findPublicEvents();
	return documents;
}

main()
	.then((res) => {
		return console.log(res);
	})
	.catch(console.error)
	.finally(() => client.close());
