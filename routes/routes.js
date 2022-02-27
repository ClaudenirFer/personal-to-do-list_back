const express = require("express");
const router = express.Router();
const controller = require("../Controller/Controller");

router.get("/", controller.getFindList);
router.get("/findById/:id", controller.getFindById);
router.get("/findByName/:title", controller.getFindByTitle);
router.get("/findByPriority/:priority", controller.getFindByPriority);
router.post("/add", controller.postAddTask);
router.put("/update/:id", controller.putUpdateTask);
router.delete("/delete/:id", controller.deleteTask);

module.exports = router;
