const db = require("../database/database");

module.exports.makeItDelete = async(req,res)=>{
    const {id} = req.body;
    try{
      await db.promise().query(`UPDATE CategoryTable SET isDeleted = 1 WHERE id=${id}`)
      return res.send("success");
    }
    catch(err){
      console.log(err);
    }
}
module.exports.updateTitle = async (req,res)=>{
    const {id,title} = req.body;
    try{
        await db.promise().query(`UPDATE CategoryTable SET title='${title}' WHERE id=${id}`);
        return res.send("success");
    }
    catch(err){

        console.log(err);
        res.status(404).send(err);
    }
}