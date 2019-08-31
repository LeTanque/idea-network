const express = require('express');

// USE EXPRESS ROUTER WITH JSON - NEEDED FOR PUT/DELETE/ETC
const routes = express.Router();






// ROUTES 👇
const userRouter = require("./routes-users.js");
const ideaRouter = require("./routes-ideas.js");

routes.use('/users', userRouter);
routes.use('/ideas', ideaRouter);




module.exports = routes;


