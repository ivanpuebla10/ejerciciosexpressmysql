//Ejercicio 1

const express = require("express");
const app = express();
const mysql = require('mysql2');
app.use(express.json())

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'expressmysql'
});

db.connect();

app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE expressmysql';
    db.query(sql,(err,result)=>{
      if(err)throw err;
      console.log(result);
      res.send('Database created...')
    })
  })

app.get('/createtableproducts',(req,res)=>{
    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT, prod_name VARCHAR(15), PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Products table created...')
      })
    })

app.get('/createtablecategories',(req,res)=>{
        let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT, cat_name VARCHAR(15), PRIMARY KEY(id))'
          db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('Categories table created...')
          })
        })

app.get('/createtableprodscategories',(req,res)=>{
            let sql = 'CREATE TABLE productoscategorias(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES expressmysql.products(id),FOREIGN KEY(category_id) REFERENCES expressmysql.categories(id) )'
              db.query(sql,(err,result)=> {
                if(err) throw err;
                console.log(result);
                res.send('Products has categories table created...')
              })
            })
    
  
app.listen(4000,() => 
      console.log('Servidor levantado en el puerto 4000')
    )

//Ejercicio 2

app.post('/addproducts',(req,res)=>{
    let post = {prod_name: req.body.prod_name, prod_desc: req.body.prod_desc};
    let sql = 'INSERT INTO products SET ?';
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Product added...')
    })
  })

app.post('/addcategories',(req,res)=>{
    let post = {cat_name: req.body.cat_name, cat_desc: req.body.cat_desc};
    let sql = 'INSERT INTO categories SET ?';
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Category added...')
    })
  })

app.post('/addproductscategories',(req,res)=>{
    let post = {product_id: req.body.product_id, category_id: req.body.category_id};
    let sql = 'INSERT INTO productoscategorias SET ?';
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Relation added...')
    })
  })
  
  //Ejercicio 3

app.put('/updateprod/:id',(req,res)=>{
    let newProdName = req.body.prod_name;
    let sql = `UPDATE products SET prod_name = '${newProdName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Product updated...')
    })
  })

app.put('/updatecat/:id',(req,res)=>{
    let newCatName = req.body.cat_name;
    let sql = `UPDATE categories SET cat_name = '${newCatName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Category updated...')
    })
  })

  //Ejercicio 4
app.get('/getprods',(req,res)=> {
    let sql = 'SELECT * FROM products';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  })

app.get('/getcats',(req,res)=> {
    let sql = 'SELECT * FROM categories';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  })

app.get('/prodsandcats',(req,res)=> {
    let sql = 'SELECT products.prod_name, categories.cat_name FROM productoscategorias INNER JOIN products ON products.id = category_id INNER JOIN categories ON categories.id = product_id';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  })







  