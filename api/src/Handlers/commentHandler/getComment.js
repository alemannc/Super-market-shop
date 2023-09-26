
const getallComents = require("../../Controllers/commentController/getComment");


const getComments = async (req, res) => {
  try {
    const comments = await getallComents();
    res.status(201).json({ comments, userName: req.user.name });
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
};

module.exports = getComments;
