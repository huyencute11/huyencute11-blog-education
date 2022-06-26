const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  id: { type: Number, require: true },
  name: { type: String, max: 255 },
  description: { type: String, max: 600 },
  image: { type: String, max: 255 },
  createAt: { type: Date, default: Date.now },
  updateStatus: { type: Date, default: Date.now },
  slug: { type: String, maxlength: 255 },
  videoId: { type: String, maxlength: 255 },
});
module.exports = mongoose.model("Course", Course);
