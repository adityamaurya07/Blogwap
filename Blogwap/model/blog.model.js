// const mongo = require("mongoose");
// const { Schema } = mongo;
// const blogSchema = new Schema({
//   title: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   image: String,
//   content: {
//     type: String,
//     required: [true, "Content field is require"],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// module.exports = mongo.model("Blog", blogSchema);

const mongo = require("mongoose");
const { Schema } = mongo;
const blogSchema = new Schema({
  title: {
    type: String,
    unique: true, // Ye tab kaam karega jab database khud ise index kar dega may be on live server
    required: [true, "Title field is required"],
  },
  category: String,
  image: String,
  content: {
    type: String,
    required: [true, "Content field is require"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Yha store hone se pehle maine check kiya ki kya title hai pehle se
// blogSchema.pre("save", async function (next) {
//   const count = await mongo.model("Blog").countDocuments({ title: this.title });
//   console.log(count);
//   if (count > 0) throw new Error("Title already exists !");
//   next();
// });
module.exports = mongo.model("Blog", blogSchema);
