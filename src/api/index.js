const server = require("./src/app");

const { conn } = require("../api/src/db");
const PORT = process.env.PORT || 3001;
require("dotenv").config();


conn
  .sync({ force: false })
  .then(() => {
    server.listen(3001, () => {
      console.log("Listening on port", 3001);
    });
  })


  