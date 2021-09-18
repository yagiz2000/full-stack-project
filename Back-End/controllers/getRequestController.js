const db = require("../database/database");

module.exports.getFirstCategory = async(req, res) =>{
    const result = await  db.promise().query('SELECT * FROM CategoryTable where parentId=0');
    res.status(200).send(result[0])
}

