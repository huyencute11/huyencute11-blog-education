const path = require("path");
const express = require("express");
const sass = require("node-sass");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });
const app = express();
const port = 3000;

//import route
const route = require("./routes");

//static file
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger

//Template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
