import express from "express";

const resources = {
	events: [],
	participants: [],
	organizers: [],
};

export function createResourceRouter(resourceName, requiresApiKey) {
	const router = express.Router();

	if (requiresApiKey) {
		router.use((req, res, next) => {
			console.log("key is:", req.query.apiKey);

			if (!req.query.apiKey) {
				throw { status: 401 };
			} else if (req.query.apiKey != "bananget") {
				throw { status: 403 };
			} else {
				next();
			}
		});
	}

	router.get("/", (req, res) => {
		res.send(resources[resourceName]);
	});
	router.get("/:id", (req, res) => {
		const id = Number(req.params.id);
		if (!resources[resourceName][id]) {
			throw { status: 404 };
		}
		res.status(200);
		res.send(resources[resourceName][id]);
	});
	router.post("/", (req, res) => {
		// Skapa ny resurs
		const newResource = req.body;
		newResource.id = String(Math.floor(Math.random() * 1000));

		// validera resursen
		if (!newResource.name.length) {
			throw { status: 402, message: "No name given" };
		}
		// Lagra den nya resusen
		resources[resourceName].push(newResource);

		// Ge tillbaka resursen
		res.status(201);
		res.send(newResource);
	});
	router.patch("/:id", (req, res) => {
		const id = Number(req.params.id);

		events[id] = {
			...events[id],
			...req.body,
		};

		res.status(200);
		res.send(events);
	});
	router.delete("/:id", (req, res) => {
		const id = Number(req.params.id);
		events[id] = undefined;
		events = events.filter((event) => !!event);
		res.status(200);
		res.send(events);
	});

	router.use((err, req, res, next) => {
		console.error("I got the error");
		if (err.status) {
			res.status(err.status);
		} else {
			res.status(500);
		}
		if (err.message) {
			res.send({ message: err.message });
		} else {
			res.send({ message: "" });
		}
	});

	return router;
}
