const db = require('../config/database.js');

const UserController = {
    createTableUsers(req,res){
        let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, user_name VARCHAR(15), user_lastname VARCHAR(15), PRIMARY KEY(id))'
          db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('Users table created...')
          })
        },

    addUser(req,res){
        let post = {user_name: req.body.user_name, user_lastname: req.body.user_lastname};
        let sql = 'INSERT INTO users SET ?';
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('User added...')
        })
      },

    updateUser(req,res){
        let newUserName = req.body.user_name;
        let sql = `UPDATE users SET user_name = '${newUserName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err,result)=> {
          if(err) throw err;
          res.send('User updated...')
        })
      },

    getUsers(req,res){
        let sql = 'SELECT * FROM users';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      },

    getUserById(req,res){
        let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result);
        })
      },

    deleteUserById(req,res){
        let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
        db.query(sql, (err,result)=> {
          if(err) throw err;
          res.send('User deleted')
        })
      }
}

module.exports = UserController;