const jwt = require("jsonwebtoken");

module.exports.authenticationMiddleWare =  (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token)return res.sendStatus(401);
    try{
      const verified = jwt.verify(token,"secretKey")
      next();
    }
    catch(err){
      res.send("Invalid token");
    }
  }