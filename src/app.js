const express = require("express");
const path = require("path");
require("dotenv").config();
const authRouter = require("./Routes/authRoute.js");
const app = express();

const PORT = process.env.PORT || 5000;

const homepage_path = "index.html";

// middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(homepage_path);
});

app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
