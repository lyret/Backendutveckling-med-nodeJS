const Http = require("http");

const server = Http.createServer((req, res) => {
	console.log("Server got a HTTP request");
	console.log("Headers of the request:");
	console.log(req.headers);
	res.write("ok");
	res.end();
});

server.listen(3000, () => {
	console.log("Is listening on port 3000");
});
