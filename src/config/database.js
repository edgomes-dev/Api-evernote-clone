const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.qdshx.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Conectou ao MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
