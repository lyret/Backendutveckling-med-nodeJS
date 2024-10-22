// index.ts
import express2 from "express";

// router.ts
import express from "express";
var resources = {
  events: [],
  participants: [],
  organizers: []
};
function createResourceRouter(resourceName, requiresApiKey) {
  const router = express.Router();
  if (requiresApiKey) {
    router.use((req, res, next) => {
      console.log("key is:", req.query.apiKey);
      if (!req.query.apiKey) {
        throw { status: 401 };
      } else if (req.query.apiKey != "bananget") {
        throw { status: 403 };
      }
      next();
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
    const newResource = req.body;
    newResource.id = String(Math.floor(Math.random() * 1e3));
    if (!newResource.name.length) {
      throw { status: 402, message: "No name given" };
    }
    resources[resourceName].push(newResource);
    res.status(201);
    res.send(newResource);
  });
  router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    resources[resourceName][id] = {
      ...resources[resourceName][id],
      ...req.body
    };
    res.status(200);
    res.send(resources[resourceName]);
  });
  router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    resources[resourceName][id] = void 0;
    resources[resourceName] = resources[resourceName].filter(
      (event) => !!event
    );
    res.status(200);
    res.send(resources[resourceName]);
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

// index.ts
var port = 3e3;
var server = express2();
server.use(express2.json());
server.use("/events", createResourceRouter("events", false));
server.use("/participants", createResourceRouter("participants", false));
server.use("/organizers", createResourceRouter("organizers", true));
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map
