const express = require("express");
const app = express();
const router = require("./routes/routes");
require("dotenv").config();
const urlencoded = require("body-parser").urlencoded;
const PORT = process.env.PORT;
app.use(urlencoded({ extended: false }));
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello Je I have Been Hit");
});
app.listen(PORT, () => {
  console.log(`The PORT: ${PORT} is open and listening for request`);
});
