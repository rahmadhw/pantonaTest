const express = require("express");
const router = express.Router();

const userRouter = require("./user.route.js");


router.use("/user", userRouter);
// app.use("/mata-kuliah", router);
// app.use("/khs", router);
// router.use("/matakuliah", matakuliahRouter);

// router.use("/khs", khs);

module.exports = router;