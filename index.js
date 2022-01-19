const express = require("express");
const app = express();
app.use(express.json())

app.use('/products', require('./routes/products'));   
app.use('/categories', require('./routes/categories')); 
app.use('/orders', require('./routes/orders'));   
app.use('/database', require('./routes/database'));  
app.use('/productsandcategories', require('./routes/productsandcategories'));   
app.use('/prudctsandorders', require('./routes/productsandorders')); 
app.use('/users', require('./routes/users'));   

app.listen(4000,() => 
      console.log('Servidor levantado en el puerto 4000')
    )






  