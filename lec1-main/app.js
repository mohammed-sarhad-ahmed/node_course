import express from "express";
const app = express();

app.get("/name", (req, res) => {
  res.status(200).send("mohammed");
});

app.listen(80, () => {
  console.log("the server has started at port 80");
});
