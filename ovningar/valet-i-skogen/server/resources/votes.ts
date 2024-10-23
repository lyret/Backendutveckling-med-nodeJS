import Express from "express";
import Mongoose from "mongoose";

interface Vote {
	animal: string;
	election: string;
}

const schema = new Mongoose.Schema<Vote>({
	animal: { type: String, required: true },
	election: { type: String, required: true },
});

const VoteModel = Mongoose.model("vote", schema);

export const voteRouter = Express.Router();

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
