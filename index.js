const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "I AM ALIVE"
  });
});

const _PORT = process.env._PORT || 3000;

app.listen(_PORT, err => {
  if (err) throw new Error("Something went very wrong!");
  console.log(`Server is running on port: ${_PORT}`);
});
