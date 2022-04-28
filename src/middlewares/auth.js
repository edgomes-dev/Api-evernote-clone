const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const WithAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    res.status(401).json({ error: "Unauthorized: no token provided" });
  else {
    jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
      if (err) res.status(401).send("Unauthorized: token invalid");
      else {
        req.email = decoded.email;
        User.findOne({ email: decoded.email })
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(401).send(err);
          });
      }
    });
  }
};

module.exports = WithAuth;
