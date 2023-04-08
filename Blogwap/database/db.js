const mongo = require("mongoose");
const blogSchema = require("../model/blog.model");

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongo.connect("mongodb://localhost:27017/blogwap", option);

const createData = async (data) => {
  const collection = new blogSchema(data);
  const dataRes = await collection.save();
  return dataRes;
};

const getAll = async () => {
  const data = await blogSchema.find();
  return data;
};

const getByQuery = async (query) => {
  const data = await blogSchema.find(query);
  return data;
};

module.exports = {
  createData: createData,
  getAll: getAll,
  getByQuery: getByQuery,
};
