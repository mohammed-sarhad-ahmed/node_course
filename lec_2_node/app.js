import express from "express";
import fs from "fs/promises";
const app = express();
app.use(express.json());

app.post("/write", async (req, res) => {
  const { birthday } = req.body;
  await fs.writeFile("./data/birthday", birthday);
  res.status(200).send("success");
});

app.patch("/update", async (req, res) => {
  const { year } = req.body;
  await fs.appendFile("./data/birthday", year);
  res.status(200).send("success");
});

app.delete("/delete", async (req, res) => {
  await fs.unlink("./data/birthday");
  res.status(204).end();
});

app.listen(80, () => {
  console.log("a server has started at port 80");
});
