const db = require('../config/database.js');

const OrderController = {
    createTableOrders(req,res){
        let sql = 'CREATE TABLE orders(id INT AUTO_INCREMENT,user_id INT, order_number INT,PRIMARY KEY(id),FOREIGN KEY(user_id) REFERENCES expressmysql.users(id))'
          db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('Orders table created...')
          })
        },
    
    addOrder(req,res){
        let post = {user_id: req.body.user_id, order_number: req.body.order_number};
        let sql = 'INSERT INTO orders SET ?';
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Order added...')
        })
      },
    
    getOrders(req,res){
        let sql = 'SELECT * FROM orders';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      }
}

module.exports = OrderController;