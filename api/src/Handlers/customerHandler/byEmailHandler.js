const findByEmail = require ('../../Controllers/customerController/byEmailCustoemer');


const byEmail = async (req, res) => {
    const {email}  = req.query;
    console.log("🚀 ~ file: byEmailHandler.js:6 ~ byEmail ~ email:", email)
  try {
    const byEmail = await findByEmail(email);
    if (byEmail.length){
      res.status(200).json( byEmail );
    } else {
      res.status(404).send( new Error("User not found") );
    };
  } catch (error) {
    res.status(500).json({
      error: `Error: ${error.message}`,
    });
  };
}

module.exports = byEmail;