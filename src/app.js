//Setting up express
const express = require("express");
const app = express();

//setting up dir path
const path = require("path");
const publicDir = path.join(__dirname, "../public");

//using public dir in express
app.use(express.static(publicDir));

app.get("/NewYork", (req, res) => {
  res.sendFile(publicDir + "/new-york.html");
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
