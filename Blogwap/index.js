const express = require("express");
const server = express();
server.listen(8080);

const cors = require("./middleware/cors.middleware");
const bodyParser = require("./middleware/bodyparser.middleware");
const multer = require("./middleware/multer.middleware");

//middle ware
server.use(cors);
server.use(bodyParser.urlEncoder);
server.use(bodyParser.jsonEncoder);
server.use(multer);

// //enable cors
// const cors = require("cors");
// // server.use(cors({origin:"http://studentwap.com"})); //jab hosting krne pe aisa likhenge taki koi aur request na kar paye
// server.use(cors());

// //recive text/data
// const body = require("body-parser");
// const multer = require("multer");
// const multipart = multer().single("image");
// const urlEncoder = body.urlencoded({ extended: false });
// const jsonEncoder = body.json();
// server.use(urlEncoder);
// server.use(jsonEncoder);
// server.use(multipart);

// require routing File
const blogRouting = require("./rounting/blog.rounting");

// middleware Routing
server.use("/blog", blogRouting);
server.use("/storage", express.static(__dirname + "/storage"));
