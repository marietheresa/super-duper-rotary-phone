// Create web server
const express = require("express");
const app = express();
app.use(express.json());

// Create in-memory database
const comments = [];

// Read comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Create comment
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start web server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});