// import express from 'express';
const express = require('express');
// import db from './data/dbConfig.js';
const db = require('../data/dbConfig.js');


// const environment = process.env.NODE_DB_ENV || 'development';

const routes = express.Router();
routes.use(express.json());


const errors = { // Dynamic error messaging based on sqlite codes
    '1': 'We ran into an error.',
    '4': 'Operation aborted',
    '9': 'Operation aborted',
    '19': 'Another card with that value exists, yo!'
};


// Get all stored cards
routes.get('/users', async (req, res) => {
    try {
        const allUsers = await db('users');
        if(!allUsers.length) {
            return res.status(200).json({ message:"No users found" });
        }
        res.status(200).json(allUsers);
    } 
    catch (error) {
        res.status(500).json({ message: "users could not be retrieved.", error:error });
    }
});


// // POST card to database
// // Requires id
// routes.post('/ideas', async (req, res) => {
//     if (!req.body.id) { return res.status(400).json({ message:"Please include an id" })}
//     try {
//         const lookForExistingCard = await db('cards')
//         .where({ id:req.body.id })
//         .first();
//         if(lookForExistingCard) {
//             return res.status(400).json({ message:"Card with ID already exists" })
//         }

//         const card = await db('cards')
//         .returning(['name', 'id'])
//         .insert(req.body);
//         return res.status(200).json({message:"Card inserted!", card:card});    
//     } catch (error) {
//         const message = errors[error.errno] || "We ran into an error";
//         res.status(500).json({ message:message, error:error });
//     }
// });


// // DESTROY card in database
// // Requires multiverse id
// routes.delete('/ideas/:id', async (req, res) => {
//     try {
//         const card = await db('cards')
//         .where({ id: req.params.id })
//         .first();

//         const count = await db('cards')
//             .where({ id: req.params.id })
//             .del();
//         if (count > 0) {
//             res.status(200).json({message:"deleted", card:card }).end();
//         } else {
//             res.status(404).json({ message:"Card not found" });
//         }
//     } catch (error) {
//         const message = errors[error.errno] || "We ran into an error";
//         res.status(500).json({ message });
//     }
// });


module.exports = routes;
