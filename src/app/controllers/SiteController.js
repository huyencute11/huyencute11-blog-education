const course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //method [GET] /home
  index(req, res, next) {
    course
      .find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((error) => next(error));
  }
  // [GET] /search
  search(req, res) {
    res.send("search");
  }
}
module.exports = new SiteController();
