let events = [];

module.exports = (server) => {
	server.get("/events", (req, res) => {
		res.send(events);
	});
	server.get("/events/:id", (req, res) => {
		const id = Number(req.params.id);
		if (events[id]) {
			res.status(200);
			res.send(events[id]);
		} else {
			res.status(404);
			res.end();
		}
	});
	server.post("/events", (req, res) => {
		events.push(req.body);
		if (!req.body.name.length) {
			throw new Error("No name given");
		}
		res.status(201);
		res.send(events);
	});
	server.patch("/events/:id", (req, res) => {
		const id = Number(req.params.id);

		events[id] = {
			...events[id],
			...req.body,
		};

		res.status(200);
		res.send(events);
	});
	server.delete("/events/:id", (req, res) => {
		const id = Number(req.params.id);
		events[id] = undefined;
		events = events.filter((event) => !!event);
		res.status(200);
		res.send(events);
	});
};
