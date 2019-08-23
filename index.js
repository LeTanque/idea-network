const express = require('express');
const helmet = require('helmet');

const server = express();
const router = require('./routes/routes.js');


server.use(express.json());
server.use(helmet());


// endpoints here
server.use('/v1', router);


const port = process.env.PORT || 3338;
server.listen(port, function() {
  console.log(`\n=== HELLO! Running on port ${port} ===\n`);
});

