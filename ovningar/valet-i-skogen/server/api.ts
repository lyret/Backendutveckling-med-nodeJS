import Mongoose from "mongoose";
import Express from "express";
import { animalRouter } from "./resources/animals";
import { electionRouter } from "./resources/elections";
import { voteRouter } from "./resources/votes";
export const apiRouter = Express.Router();

apiRouter.use(Express.json());
apiRouter.use((req, res, next) => {
	Mongoose.connect("mongodb://localhost/");
	next();
});

apiRouter.use("/animals", animalRouter);
apiRouter.use("/elections", electionRouter);
apiRouter.use("/votes", voteRouter);
