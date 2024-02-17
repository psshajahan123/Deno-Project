const express = require("express");
const path = require("path");
const router = express.Router();

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.join(__dirname1, "/client/build")));

  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
  });
} else {
  router.get("/", (req, res) => {
    res.send({ response: "Server is up and running." }).status(200);
  });
}

module.exports = router;
