const db = require("../database/database");
const jwt = require("jsonwebtoken");

module.exports.getSpecificCategory = async(req,res)=>{
    const {parentId} = req.body;
    const result  = await db.promise().query(`SELECT * FROM CategoryTable WHERE parentId=${parentId}`);
    res.status(200).send(result[0]);
  }
module.exports.addCategory = async(req,res)=>{
    try{
      const {title,parentId} = req.body;
      await db.promise().query(`INSERT INTO CategoryTable (title, parentId, isDeleted) VALUES ('${title}','${parentId}','0')`)
      return res.send("successful");
    }
    catch(err){
        res.status(404).send(err);   
     }
  }
module.exports.login = async (req,res)=>{
    const {name,email} =req.body;
    const user = {name,email};
    const accessToken = jwt.sign(user,"secretKey");
    const result = await db.promise().query(`SELECT * FROM userstable WHERE name='${name}' AND email='${email}'`);
    if(result[0].length>0){
      res.header('auth-token',accessToken);
      res.json({"token":accessToken});
      return accessToken;
    }
    else{
      res.status(404).send("User not found")
    }
  }