class NewsController {
  //method [GET] /news
  index(req, res) {
    res.render("news");
  }
  // [GET] detail news
  show(req, res) {
    res.send("NEW DETAIL");
  }
}
module.exports = new NewsController();
