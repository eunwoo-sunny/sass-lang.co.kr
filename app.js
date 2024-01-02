const express = require('express')
const path = require('path')
const app = express(); 
const port = 8004;

app.set('view engine','ejs');
app.set('views', './views')


app.get('/', (req,res) => { 
    res.render('index', {heading : "User List"})
})



app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended :true}))
// app.use(router);
app.use('/contacts', require('./routes/contactRoutes'))



app.listen(port, ()=> {
    console.log(`${port} port server is running`)
})