import express from 'express';
import helmet from 'helmet';
import router from './routes/routes.js';



const server = express();

server.use(helmet());
server.use(express.json());


// ROOT RESPONSE - ALL METHODS 👇
server.all('/', (req, res) => {
  console.log("Request method:  ",req.method);
  res.send(`
    <code>  
      <h1>Welcome to the idea network server</h1>
      <h3>${req.method} request recieved</h3>
    </code>
  `);
});


// ENDPOINTS 👇
server.use('/v1', router);


// SERVER HELLO 👇
const port = process.env.PORT || 3338;
server.listen(port, function() {
  console.log(`\n=== HELLO! Running on port ${port} ===\n`);
});



// export default server;
