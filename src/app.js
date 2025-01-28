const express = require("express");
const path = require("path");
require("dotenv").config();
const authRouter = require("./Routes/authRoute.js");
const todoRouter = require("./Routes/todoRoute.js");
const authMiddleware = require("./middleware/authMiddleware.js");
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to To-do App" });
});

app.use("/api", authRouter);
app.use("/api/todos", authMiddleware, todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
