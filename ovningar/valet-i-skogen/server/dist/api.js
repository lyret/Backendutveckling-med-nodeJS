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
var api_exports = {};
__export(api_exports, {
  apiRouter: () => apiRouter
});
module.exports = __toCommonJS(api_exports);
var import_mongoose = __toESM(require("mongoose"));
var import_express = __toESM(require("express"));
var import_animals = require("./resources/animals");
var import_election = require("./resources/election");
var import_vote = require("./resources/vote");
const apiRouter = import_express.default.Router();
apiRouter.use(import_express.default.json());
apiRouter.use((req, res, next) => {
  import_mongoose.default.connect("mongodb://localhost/");
  next();
});
apiRouter.use("/animals", import_animals.animalRouter);
apiRouter.use("/elections", import_election.electionRouter);
apiRouter.use("/votes", import_vote.voteRouter);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  apiRouter
});
