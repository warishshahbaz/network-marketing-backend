var express = require("express");
var router = express.Router();
var Controller = require("../controller/indexController");

router.post("/user/valid_sponcer_id", Controller.validSponcerId);
router.post("/user/get_varifaction_code", Controller.getVarifactionCode);
router.post("/user/verify_varifaction_code", Controller.verifyVarifactionCode);
router.post("/user/register", Controller.userRegister);
router.post("/user/login", Controller.userLogin);

module.exports = router;
