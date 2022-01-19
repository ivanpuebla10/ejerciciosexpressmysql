const db = require('../config/database.js');

const ProdandCatController = {
    createTableProdsandCats(req,res){
        let sql = 'CREATE TABLE productoscategorias(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES expressmysql.products(id),FOREIGN KEY(category_id) REFERENCES expressmysql.categories(id) )'
          db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('Products has categories table created...')
          })
        },

    addProdandCat(req,res){
        let post = {product_id: req.body.product_id, category_id: req.body.category_id};
        let sql = 'INSERT INTO productoscategorias SET ?';
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Relation added...')
        })
      },

    getProdsandCats(req,res){
        let sql = 'SELECT products.prod_name, categories.cat_name FROM productoscategorias INNER JOIN products ON products.id = category_id INNER JOIN categories ON categories.id = product_id';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result);
        })
      }
}

module.exports = ProdandCatController;