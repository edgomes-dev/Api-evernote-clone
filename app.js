const express = require("express");
const path = require("path");
require("./src/config/database");
const logger = require("morgan");
const cors = require("cors");

const usersRouter = require("./src/routes/users");
const notesRouter = require("./src/routes/notes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/users", usersRouter);
app.use("/notes", notesRouter);

module.exports = app;
