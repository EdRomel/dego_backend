const { response } = require("express");

const getUser = (req, res = response) => {
  res.json({
    msg: "get api - controller",
  });
};

const putUser = (req, res = response) => {
  res.json({
    msg: "put api - controller",
  });
};

const postUser = (req, res = response) => {
  res.json({
    msg: "post api - controller",
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: "delete api - controller",
  });
};

const patchUser = (req, res = response) => {
  res.json({
    msg: "patch api - controller",
  });
};

module.exports = {
  getUser,
  putUser,
  postUser,
  deleteUser,
  patchUser,
};
