const { createPost } = require("../controllers/postsController");

const postCreateHandler = async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const newPost = await createPost(title, body, userId);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPostHandler = (req, res) => {
  res.send("Estoy en posts get");
};

module.exports = {
  postCreateHandler,
  getPostHandler,
};
