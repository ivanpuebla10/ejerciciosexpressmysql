const db = require('../config/database.js');

const ProductController = {

createTableProducts(req,res){
    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT, prod_name VARCHAR(15), PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Products table created...')
      })
    },
addProduct(req,res){
    let post = {prod_name: req.body.prod_name, prod_desc: req.body.prod_desc};
    let sql = 'INSERT INTO products SET ?';
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Product added...')
    })
  },

updateProduct(req,res){
    let newProdName = req.body.prod_name;
    let sql = `UPDATE products SET prod_name = '${newProdName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Product updated...')
    })
  },
  
getProducts(req,res){
    let sql = 'SELECT * FROM products';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  },

getProductById(req,res){
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  },

getProductByName(req,res){
    let sql = `SELECT * FROM products WHERE prod_name = "${req.params.caca}"`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  },

deleteProductById(req,res){
    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Product deleted')
    })
  },

orderProductsDesc(req,res){
    let sql = `SELECT * FROM products ORDER BY id DESC`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  }
}

module.exports = ProductController;
