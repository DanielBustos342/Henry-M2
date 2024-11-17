const { Router } = require("express");
const usersRouter = require("./usersRoutes");
const postsRouter = require("./postsRoutes");

const router = Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
