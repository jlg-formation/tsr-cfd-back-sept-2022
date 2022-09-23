const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;

const www = "./public";

app.get("/api/date", (req, res) => {
  res.json({ now: new Date() });
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});