const express = require("express");
const userController = require("../controller/user.controller.js");
const router = express.Router();

//Get
// router.get("/:id", mahasiswaController.getById);
router.get("/", userController.get);

//Insert
router.post("/", userController.upload.single('image'), userController.store);

//Update
router.put("/:id", userController.upload.single('image'), userController.update);

//Delete
router.delete("/:id", userController.destroy);

module.exports = router;