
import express from 'express';
const helmet = require('helmet');

const server = express();
const router = require('./routes/routes.js');


server.use(express.json());
server.use(helmet());


server.get('/', (req, res) => {
  console.log(req);
  res.send(`
    <h1><code>Welcome to the idea network server</code></h1>
  `);
});


// ENDPOINTS 👇
server.use('/v1', router);


const port = process.env.PORT || 3338;
server.listen(port, function() {
  console.log(`\n=== HELLO! Running on port ${port} ===\n`);
});

