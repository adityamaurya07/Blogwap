// const database = require("../database/db");
// const createBlog = async (request, response) => {
//   // response.json({
//   //   textData: request.body,
//   //   fileData: request.file,
//   // });
//   const data = request.body;
//   const fileInfo = request.file;
//   data["image"] = fileInfo.destination + "/" + fileInfo.filename;
//   // console.log(data);
//   try {
//     const dataRes = await database.createData(data);
//     response.status(200);
//     response.json(dataRes);
//   } catch (error) {
//     const err = JSON.parse(JSON.stringify(error));
//     console.log(err.errors.title.message);
//     response.status(409);
//     response.json(err);
//     if (err.test) {
//       console.log("teskkkkt", err);
//     }
//   }
// };
// module.exports = {
//   createBlog: createBlog,
// };
// //unique ye work nhi kar rha tha...

const database = require("../database/db");

const createBlog = async (request, response) => {
  if (!request.file) {
    response.status(404);
    response.json({
      type: "image-validation!",
      field: "image",
      message: "Please select a file",
    });
  }

  // response.json({
  //   textData: request.body,
  //   fileData: request.file,
  // });
  const data = request.body;
  const fileInfo = request.file;
  data["image"] = fileInfo.destination + "/" + fileInfo.filename;
  // console.log(data);
  try {
    const dataRes = await database.createData(data);
    response.status(200);
    response.json(dataRes);
  } catch (error) {
    let field = [];
    console.log(error);
    // const err = JSON.parse(JSON.stringify(error, ["message", "name"]));
    response.status(409);
    // response.json(err);
    // console.log(response.json(err.name));

    //jo version me sir ne btya wo
    // response.json(error);
    if (error.code && error.code == 11000) {
      response.json({
        message: "Title field is unique !",
        field: "title",
        type: "unique",
      });
    } else {
      for (let key in error.errors) {
        // console.log(key);
        field.push({
          name: key,
          message: error.errors[key].message,
        });
      }
      response.json({
        type: "required",
        field: field,
      });
    }
    response.json(error);
  }
};

const getAllBlogs = async (request, response) => {
  const dataRes = await database.getAll();
  if (dataRes.length != 0) {
    response.status(200);
    response.json(dataRes);
  } else {
    response.status(404);
    response.json({
      message: "blog not found !",
    });
  }
};

const getAllBlogsByCategory = async (request, response) => {
  const query = {
    category: request.params.category,
  };
  const dataRes = await database.getByQuery(query);
  if (dataRes.length != 0) {
    response.status(200);
    response.json(dataRes);
  } else {
    response.status(404);
    response.json({
      message: "data not found !",
    });
  }
};

module.exports = {
  createBlog: createBlog,
  getAllBlogs: getAllBlogs,
  getAllBlogsByCategory: getAllBlogsByCategory,
};

// const database = require("../database/db");
// const createBlog = async (request, response) => {
//   const data = request.body;
//   const fileInfo = request.file;
//   data["image"] = fileInfo.destination + "/" + fileInfo.filename;

//   try {
//     const dataRes = await database.createData(data);
//     response.status(200);
//     response.json(dataRes);
//   } catch (error) {
//     response.status(409);
//     response.json(error);
//   }
// };

// module.exports = {
//   createBlog: createBlog,
// };
