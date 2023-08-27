require("dotenv").config();
const server = require("./src/app");
const PORT = process.env.PORT || 3001;
const { conn } = require('./src/db');


conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
  