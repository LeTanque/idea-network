import express from 'express';
import db from '../data/dbConfig.js';

// USE EXPRESS ROUTER WITH JSON
const routes = express.Router();



// DYNAMIC ERROR OBJECT
const errorObject = { // Dynamic error messaging based on sqlite codes
    '1': 'We ran into an error.',
    '4': 'Operation aborted',
    '9': 'Operation aborted',
    '19': 'Another element with that value exists, yo!'
};
const backupError='We ran into an error, yo! Crazy!'


// GET ALL DA USERS
routes.get('/users', async (req, res) => {
    try {
        const allUsers = await db('users');
        if(!allUsers.length) {
            return res.status(200).json({ message:"No users found" });
        }
        res.status(200).json(allUsers);
    } 
    catch (error) {
        const message = errorObject[error.errno] || backupError;
        res.status(500).json({ message: "Error retrieving users.", error:message });
    }
});


// POST DA USER
routes.post('/users', async (req, res) => {

    // MUST INCLUDE A NAME
    if (!req.body.name) { 
        return res.status(400).json({ message:"Please include a name" })
    }

    try {
        const lookForExistingUsername = await db('users')
        .where({ name:req.body.name })
        .first();

        if(lookForExistingUsername) {
            return res.status(400).json({ message:"User with name already exists" })
        }

        const userId = await db('users')
        .returning(['name', 'id'])
        .insert(req.body);

        return res.status(200).json({ message: `User ${req.body.name} inserted!`, id: userId[0]});
    }

    catch (error) {
        const message = errorObject[error.errno] || backupError;
        res.status(500).json({ message: "Error adding user.", error:message });
    }
});


// DESTROY USER BY ID
routes.delete('/users/:id', async (req, res) => {
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
        const message = errorObject[error.errno] || backupError;
        res.status(500).json({ message: "Error removing user.", error:message });
    }
});



// DESTROY USER BY NAME
routes.delete('/users', async (req, res) => {
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
            name:userObject.name,
            id:userObject.id
        }).end();
    }

    catch (error) {
        const message = errorObject[error.errno] || backupError;
        res.status(500).json({ message: "Error removing user.", error:message });
    }
});



export default routes;


