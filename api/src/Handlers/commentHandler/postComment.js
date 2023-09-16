
const createComment = require("../../Controllers/commentController/postComment.js");


const comments = async (req, res) => {
  const { text, calification, userName } = req.body; 
  console.log("🚀 ~ file: postComment.js:7 ~ comments ~ req.body:", req.body)
  try {
    const newComment = await createComment( text, calification, userName);
    res.status(201).json(newComment);
    console.log("🚀 ~ file: postComment.js:10 ~ comments ~ newComment:", newComment)
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
};

module.exports = comments;