const db = require('../config/database.js');

const DataBaseController = {
    dbController(req,res){
      let sql ='CREATE DATABASE expressmysql';
      db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Database created...')
      })
    }
}

module.exports = DataBaseController;