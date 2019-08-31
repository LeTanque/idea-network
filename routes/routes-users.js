import { errorObject,errorBackup } from "./error-handling.js";
import express from "express";
import db from "../data/dbConfig.js";

// USE EXPRESS ROUTER WITH JSON - NEEDED FOR PUT/DELETE/ETC
const userRoutes = express();




// GET ALL DA USERS
userRoutes.get('/', async (req, res) => {
    try {
        const allUsers = await db('users');
        if(!allUsers.length) {
            return res.status(404).json({ message:"No users found" });
        }
        res.status(200).json(allUsers);
    } 
    catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message: "Error retrieving users.", error:message });
    }
});


// POST DA USER
userRoutes.post('/', async (req, res) => {

    // MUST INCLUDE A NAME
    if (!req.body.name) { 
        return res.status(400).json({ message:"Please include a name" })
    }

    try {
        // NAME MUST BE UNIQUE CASE INSENSITIVE
        const existingUserWithName = await db('users')
        .whereRaw('LOWER(name) LIKE ?', req.body.name.toLowerCase())
        .first();

        if(existingUserWithName) {
            return res.status(400).json({ message:"User with name already exists" })
        }

        const userAdd = await db('users')
        .returning(['name', 'id'])
        .insert(req.body);

        res.status(200).json({ 
            message: `User ${req.body.name} inserted!`, 
            user_object: { 
                user_id: userAdd[0].id,
                name: userAdd[0].name
            } 
        });
    }

    catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message: "Error adding user.", error:message });
    }
});


// DESTROY USER BY ID
userRoutes.delete('/:id', async (req, res) => {
    if(!req.params.id) {
        return res.status(400).json({ message: "Please provide the id of the user that you would like to remove." });
    }

    try {
        const userObject = await db('users')
            .where({ id: req.params.id })
            .first();

        const count = await db('users')
            .where({ id: req.params.id })
            .del();

        if (count > 0) {
            res.status(200).json({ 
                message: "User removed.", 
                name:userObject.name,
                id:userObject.id
            }).end();
        } else {
            res.status(404).json({ message: "User not found." });
        }
    }

    catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message: "Error removing user.", error:message });
    }
});



// DESTROY USER BY NAME
userRoutes.delete('/', async (req, res) => {
    if(!req.body.name) {
        return res.status(400).json({ message: "Please provide the name of the user that you would like to remove." });
    }
    
    const userObject = await db('users')
        .where({ name: req.body.name })
        .first();
        
    if(!userObject) {
        return res.status(404).json({ message: `User ${req.body.name} not found.` });
    }

    try {
        await db('users')
            .where({ name: req.body.name })
            .del();

        res.status(200).json({ 
            message: "User removed.", 
            user_id:userObject.id,
            name:userObject.name
        }).end();
    }

    catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message: "Error removing user.", error:message });
    }
});



module.exports = userRoutes;

