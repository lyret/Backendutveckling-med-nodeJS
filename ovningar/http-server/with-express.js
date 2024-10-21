const express = require("express");
const addEventRoutes = require("./events-routes");

const port = 3000;
const server = express();

addEventRoutes(server);

/*
/events
/participants
/organizers
*/

server.use(express.json());

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
