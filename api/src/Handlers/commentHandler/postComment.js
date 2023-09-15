const { Router } = require("express");

const postComment = require("../../Controllers/commentController/postComment.js");

const router = Router();

const comments = async (req, res) => {
  try {
    const comment = await postComment();
    res.status(201).json(comment);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
};

module.exports = comments;
