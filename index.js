const express = require("express");
const helmet = require("helmet");
const router = require("./routes/routes.js");

// USE EXPRESS ROUTER WITH JSON - NEEDED FOR PUT/DELETE/ETC
const server = express();
server.use(helmet());
server.use(express.json());



// ROOT RESPONSE - ALL METHODS 👇
server.all('/', (req, res) => {
  console.log("Request method:  ",req.method);
  res.send(`
    <body style="background-color:#131313; color:#fafafa">
      <code>  
        <h1>Welcome to the idea network server</h1>
        <h3>${req.method} request recieved</h3>
      </code>
    </body>
  `);
});


// ENDPOINTS 👇
server.use('/v1', router);


// SERVER HELLO 👇
const port = process.env.PORT || 3338;
server.listen(port, function() {
  console.log(`\n---==[]==---   My favorite number is... ${port}!   ---==[]==---\n`);
});


