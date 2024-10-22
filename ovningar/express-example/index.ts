import express from "express";
import { createResourceRouter } from "./router";

const port = 3000;
const server = express();

/*
/events
/participants
/organizers
*/

server.use(express.json());

server.use("/events", createResourceRouter("events", false));
server.use("/participants", createResourceRouter("participants", false));
server.use("/organizers", createResourceRouter("organizers", true));

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
