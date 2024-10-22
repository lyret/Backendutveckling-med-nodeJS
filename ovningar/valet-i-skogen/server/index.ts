import Express from "express";
import { apiRouter } from "./api";

const port = 3000;

const app = Express();

app.use((req, res, next) => {
	console.log("Got a request to the url: " + req.url);
	next();
});

app.use(Express.static("../client/dist"));
app.use("/api", apiRouter);

console.log("Starting server...");

app.listen(port, () => {
	console.log("Server is listening on " + port);
});
