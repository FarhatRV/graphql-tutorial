Steps to be followed:

- npm init
- npm i express express-graphql graphql
- npm i -D nodemon
- in package.json -> change the start file and command
  "main": "server.js",
  "scripts": {
  "local-dev": "nodemon server.js"
  },

- in server.js
  const express = require("express");
  const app = express();

app.listen(5000, () => console.log("Server Running"));

- npm run local-dev
