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

app.get('/prodid/:id',(req,res)=> {
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  })

app.get('/productsdesc',(req,res)=> {
    let sql = `SELECT * FROM products ORDER BY id DESC`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  })

app.get('/catid/:id',(req,res)=> {
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  })

app.get('/getproduct/:caca',(req,res)=> {
    let sql = `SELECT * FROM products WHERE prod_name = "${req.params.caca}"`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  })

//Ejercicio 5

app.delete('/deleteproduct/:id',(req,res)=>{
    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Product deleted')
    })
  })

//Ejercicios extra
//Ej1
app.get('/createtableusers',(req,res)=>{
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, user_name VARCHAR(15), user_lastname VARCHAR(15), PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Users table created...')
      })
    })

app.get('/createtableorders',(req,res)=>{
        let sql = 'CREATE TABLE orders(id INT AUTO_INCREMENT,user_id INT, order_number INT,PRIMARY KEY(id),FOREIGN KEY(user_id) REFERENCES expressmysql.users(id))'
          db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('Orders table created...')
          })
        })

app.get('/productsorders',(req,res)=>{
            let sql = 'CREATE TABLE productsorders(id INT AUTO_INCREMENT,product_id INT,order_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES expressmysql.products(id),FOREIGN KEY(order_id) REFERENCES expressmysql.orders(id))'
              db.query(sql,(err,result)=> {
                if(err) throw err;
                console.log(result);
                res.send('Relation table created...')
              })
            })

//EJ2
app.post('/adduser',(req,res)=>{
    let post = {user_name: req.body.user_name, user_lastname: req.body.user_lastname};
    let sql = 'INSERT INTO users SET ?';
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('User added...')
    })
  })

  app.post('/addorder',(req,res)=>{
    let post = {user_id: req.body.user_id, order_number: req.body.order_number};
    let sql = 'INSERT INTO orders SET ?';
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Order added...')
    })
  })

  //Ej3
  app.put('/updateuser/:id',(req,res)=>{
    let newUserName = req.body.user_name;
    let sql = `UPDATE users SET user_name = '${newUserName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('User updated...')
    })
  })

  //Ej4
  app.get('/getusers',(req,res)=> {
    let sql = 'SELECT * FROM users';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  })

  app.get('/getorders',(req,res)=> {
    let sql = 'SELECT * FROM orders';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  })

  app.get('/getusersandorders',(req,res)=> {
    let sql = 'SELECT users.user_name, orders.order_number FROM users INNER JOIN orders ON users.id = user_id';
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result)
    })
  })

  app.get('/getuser/:id',(req,res)=> {
    let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
      if(err) throw err;
      res.send(result);
    })
  })
//AGREGAR ON DELETE CASCADE DESPUES DE REFERENCES EN ORDERS(DONDE ESTA LA FOREIGN KEY)
  app.delete('/deleteuser/:id',(req,res)=>{
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('User deleted')
    })
  })









  