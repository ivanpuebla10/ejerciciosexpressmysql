const db = require('../config/database.js');

const CategoryController = {
    createTableCategories(req,res){
        let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT, cat_name VARCHAR(15), PRIMARY KEY(id))'
          db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('Categories table created...')
          })
        },

    addCategory(req,res){
        let post = {cat_name: req.body.cat_name, cat_desc: req.body.cat_desc};
        let sql = 'INSERT INTO categories SET ?';
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Category added...')
        })
      },

    updateCategory(req,res){
        let newCatName = req.body.cat_name;
        let sql = `UPDATE categories SET cat_name = '${newCatName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err,result)=> {
          if(err) throw err;
          res.send('Category updated...')
        })
      },

    getCategory(req,res){
        let sql = 'SELECT * FROM categories';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      },

    getCategoryById(req,res){
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result);
        })
      }
}

module.exports = CategoryController;