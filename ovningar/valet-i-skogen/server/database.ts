import { Animal, Election, Vote } from "./types";
import Mongoose from "mongoose";

export const connection = Mongoose.connect("mongodb://localhost/");

export const AnimalModel = Mongoose.model<any>("animal", {
	name: { type: String, required: true },
	image: { type: String, required: true },
});
