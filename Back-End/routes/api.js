var express = require('express');
var router = express.Router();
const {authenticationMiddleWare} = require("../middleware/auth.middleware");
const {getFirstCategory} = require("../controllers/getRequestController");
const {getSpecificCategory,addCategory,login} = require("../controllers/postRequestController");
const {makeItDelete,updateTitle} = require("../controllers/putRequestController");

router.get('/',authenticationMiddleWare ,getFirstCategory);

router.post("/specific",authenticationMiddleWare,getSpecificCategory);

router.post("/addCategory",authenticationMiddleWare,addCategory);

router.post("/login",login);

router.put("/update",authenticationMiddleWare,updateTitle);

router.put("/",authenticationMiddleWare,makeItDelete);



module.exports = router;
