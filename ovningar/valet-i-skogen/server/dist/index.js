var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// index.ts
var import_express5 = __toESM(require("express"));

// api.ts
var import_mongoose4 = __toESM(require("mongoose"));
var import_express4 = __toESM(require("express"));

// resources/animals.ts
var import_express = __toESM(require("express"));
var import_mongoose = __toESM(require("mongoose"));
var schema = new import_mongoose.default.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});
var AnimalModel = import_mongoose.default.model("animal", schema);
var animalRouter = import_express.default.Router();
animalRouter.get("/", async (req, res) => {
  const animals = await AnimalModel.find().exec();
  res.send(animals);
});
animalRouter.get("/:id", async (req, res) => {
  const animals = await AnimalModel.findById(req.params.id).exec();
  res.send(animals);
});
animalRouter.post("/", async (req, res) => {
  const newAnimal = new AnimalModel(req.body);
  try {
    await newAnimal.save();
    res.send(newAnimal);
  } catch (err) {
    console.log("Save to database failed");
    res.status(500);
    res.send({});
  }
});

// resources/elections.ts
var import_express2 = __toESM(require("express"));
var import_mongoose2 = __toESM(require("mongoose"));
var schema2 = new import_mongoose2.default.Schema({
  name: { type: String, required: true }
});
var ElectionModel = import_mongoose2.default.model("election", schema2);
var electionRouter = import_express2.default.Router();
electionRouter.get("/", async (req, res) => {
  const animals = await ElectionModel.find().exec();
  res.send(animals);
});
electionRouter.get("/:id", async (req, res) => {
  const animals = await ElectionModel.findById(req.params.id).exec();
  res.send(animals);
});
electionRouter.post("/", async (req, res) => {
  const newAnimal = new ElectionModel(req.body);
  try {
    await newAnimal.save();
    res.send(newAnimal);
  } catch (err) {
    console.log("Save to database failed");
    res.status(500);
    res.send({});
  }
});

// resources/votes.ts
var import_express3 = __toESM(require("express"));
var import_mongoose3 = __toESM(require("mongoose"));
var schema3 = new import_mongoose3.default.Schema({
  animal: { type: String, required: true },
  election: { type: String, required: true }
});
var VoteModel = import_mongoose3.default.model("vote", schema3);
var voteRouter = import_express3.default.Router();
voteRouter.get("/", async (req, res) => {
  const animals = await VoteModel.find().exec();
  res.send(animals);
});
voteRouter.get("/:id", async (req, res) => {
  const animals = await VoteModel.findById(req.params.id).exec();
  res.send(animals);
});
voteRouter.post("/", async (req, res) => {
  const newAnimal = new VoteModel(req.body);
  try {
    await newAnimal.save();
    res.send(newAnimal);
  } catch (err) {
    console.log("Save to database failed");
    res.status(500);
    res.send({});
  }
});

// api.ts
var apiRouter = import_express4.default.Router();
apiRouter.use(import_express4.default.json());
apiRouter.use((req, res, next) => {
  import_mongoose4.default.connect("mongodb://localhost/");
  next();
});
apiRouter.use("/animals", animalRouter);
apiRouter.use("/elections", electionRouter);
apiRouter.use("/votes", voteRouter);

// index.ts
var port = 3e3;
var app = (0, import_express5.default)();
app.use((req, res, next) => {
  console.log("Got a request to the url: " + req.url);
  next();
});
app.use(import_express5.default.static("../client/dist"));
app.use("/api", apiRouter);
console.log("Starting server...");
app.listen(port, () => {
  console.log("Server is listening on " + port);
});
