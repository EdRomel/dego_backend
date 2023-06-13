const { Router } = require("express");
const {
  getUser,
  putUser,
  postUser,
  deleteUser,
  patchUser,
} = require("../controller/user.controller");

const router = Router();

router.get("/", getUser);

router.put("/", putUser);

router.post("/", postUser);

router.delete("/", deleteUser);

router.patch("/", patchUser);

module.exports = router;
