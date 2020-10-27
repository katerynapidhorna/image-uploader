const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const folder = "./uploadedImages";
const { PORT } = require("./config");
app.use(cors());

// try {
//   if (!fs.existsSync(folder)) {
//     fs.mkdirSync(folder);
//   } else {
//     console.log(fs.readdirSync(folder));
//   }
// } catch (err) {
//   console.error(err);
// }

app.get("/", (req, res) => {
  console.log("requested");
  res.send(fs.readdirSync(folder));
});

app.post("/upload-image", async (req, res) => {
  const image = req.params;
  const newImg = await folder.create({ image });
});

app.listen(PORT, () => {
  console.log("Listen on port:", PORT);
});
