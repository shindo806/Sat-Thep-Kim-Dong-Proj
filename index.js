const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://SinhLeVan:S1nh123456@sat-thep-kim-dong-njfys.mongodb.net/test?retryWrites=true&w=majority"
);

const postRoute = require("./routes/post.route");
const homeRoute = require("./routes/home.route");
const exportRoute = require("./routes/export.route");

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.use("/post", postRoute);

app.use("/", homeRoute);

app.use("/export", exportRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
