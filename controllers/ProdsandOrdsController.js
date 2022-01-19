const db = require('../config/database.js');

const ProdandOrderController = {
    createTableProdsandOrds(req,res){
        let sql = 'CREATE TABLE productsorders(id INT AUTO_INCREMENT,product_id INT,order_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES expressmysql.products(id),FOREIGN KEY(order_id) REFERENCES expressmysql.orders(id))'
            db.query(sql,(err,result)=> {
              if(err) throw err;
              console.log(result);
              res.send('Relation table created...')
              })
        },
    
    getProdsandOrds(req,res){
        let sql = 'SELECT users.user_name, orders.order_number FROM users INNER JOIN orders ON users.id = user_id';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      }
}

module.exports = ProdandOrderController;