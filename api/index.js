require("dotenv").config();
const server = require("./src/app");
const transporter = require("./src/Nodemailer/postEmail.js");
const PORT = process.env.PORT || 3001;
const { conn } = require('./src/db');


conn.sync({
  alter:  {
    modify: true,
    drop: false,
  }, 
}).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
})
  
  .then(async () => {
    await transporter.verify().then(() => {
      console.log("Email service: ✅");
    });
  });
  
  