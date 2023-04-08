const express = require("express");
const blogController = require("../controller/blog.controller");
const router = express.Router();

router.get("/", (request, response) => {
  blogController.getAllBlogs(request, response);
});
router.get("/:category", (request, response) => {
  blogController.getAllBlogsByCategory(request, response);
});
router.post("/", (request, response) => {
  // response.send("Post request");
  // response.json(request.body); //isse text a jayaga
  // console.log(request.file); //isse image a jayegi
  blogController.createBlog(request, response);
});
router.put("/", (request, response) => {
  response.send("put request");
});
router.delete("/", (request, response) => {
  response.send("delete request");
});

module.exports = router;
