import Express from "express";
import Mongoose from "mongoose";

interface Animal {
	name: string;
	image: string;
}

const schema = new Mongoose.Schema<Animal>({
	name: { type: String, required: true },
	image: { type: String, required: true },
});

const AnimalModel = Mongoose.model("animal", schema);

export const animalRouter = Express.Router();

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
