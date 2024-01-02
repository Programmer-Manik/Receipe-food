const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const chepRecipes = require("./data/chepRecipes.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("ami choltechi running");
});

app.get("/chep", (req, res) => {
  res.send(chepRecipes);
});

app.get("/chep/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectChep = chepRecipes.find((chep) => chep._id === id);
  res.send(selectChep);
  console.log(selectChep);
});

app.listen(port, () => {
  console.log(`server is running this port, ${port}`);
});
