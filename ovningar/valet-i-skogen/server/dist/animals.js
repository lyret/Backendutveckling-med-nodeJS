var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var animals_exports = {};
__export(animals_exports, {
  animalRouter: () => animalRouter
});
module.exports = __toCommonJS(animals_exports);
var import_express = __toESM(require("express"));
var import_mongoose = __toESM(require("mongoose"));
const schema = new import_mongoose.default.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});
const AnimalModel = import_mongoose.default.model("animal", schema);
const animalRouter = import_express.default.Router();
animalRouter.get("/", async (req, res) => {
  const animals = await AnimalModel.find().exec();
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  animalRouter
});
