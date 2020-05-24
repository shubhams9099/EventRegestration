const express = require("express");
const bodyparser = require("body-parser");
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyparser.json());

app.use("/admin", adminRouter);
app.use("/", function (req, res) {
  res.send("required result not found");
});

//app.use("/user", userRouter);

var port = process.env.PORT || 8080;
app.listen(port);