
const getallComents = require("../../Controllers/commentController/getComment");


const getComments = async (req, res) => {
    try {
    const Comment = await getallComents();

      res.status(201).json(Comment);

    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  };

  module.exports = getComments;
