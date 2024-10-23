import Express from "express";
import Mongoose from "mongoose";

export interface Election {
	name: string;
}

const schema = new Mongoose.Schema<Election>({
	name: { type: String, required: true },
});

export const ElectionModel = Mongoose.model("election", schema);

export const electionRouter = Express.Router();

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
