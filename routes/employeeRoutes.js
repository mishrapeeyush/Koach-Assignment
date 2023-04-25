const express = require("express");
const router = express.Router();
const controller = require("../controller/employee");

router.route("/").post(controller.createEmployee);
router.route("/").get(controller.getEmployees);
router.route("/:id").delete(controller.deleteEmployee);
router.route("/:id").put(controller.updateEmployee);
router.route("/:id").get(controller.getOneEmployee);




module.exports = router;