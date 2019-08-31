import { errorObject,errorBackup } from "./error-handling.js";
import express from "express";
import db from "../data/dbConfig.js";

// USE EXPRESS ROUTER WITH JSON - NEEDED FOR PUT/DELETE/ETC
const ideaRouter = express();




// GET ALL DA IDEAS
ideaRouter.get('/', async (req, res) => {
    try {
        const allIdeas = await db('ideas');
        if(!allIdeas.length) {
            return res.status(404).json({ message:"No ideas found" });
        }
        res.status(200).json(allIdeas);
    } 
    catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message: "Error retrieving ideas.", error:message });
    }
});



module.exports = ideaRouter;

