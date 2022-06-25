class SiteController {
  //method [GET] /home
  index(req, res) {
    res.render("Home");
  }
  // [GET] /search
  search(req, res) {
    res.send("search");
  }
}
module.exports = new SiteController();
