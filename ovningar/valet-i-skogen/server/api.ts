import Express from "express";
import { AnimalModel } from "./database";

export const apiRouter = Express.Router();

apiRouter.use(Express.json());

apiRouter.get("/animals", async (req, res) => {
	const animals = await AnimalModel.find().exec();
	res.send(animals);
});

apiRouter.post("/animals", async (req, res) => {
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
