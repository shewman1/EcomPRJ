const path = require('path');
const express = require('express');
const app = express();
const PORT = 3137;
const mongoose = require('mongoose');
const hbs = require('hbs');
const User = require('./models/user');

//setting up the partials of hbs
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))


app.use(async(req, res, next)=>{
    let user = await User.findOne({
        _id: '67518a5e15b71a1f81c73bf9'
    });
    req.user = user;
    next();
})
// app.post('/superadmin/products', (req,res, next)=>{
//     const {name, price, description, seller, imageUrl} = req.body;
app.get('/',(req, res, next)=>{
    res.render('index');
})




const adminRouter = require('./routes/admin')
app.use('/admin',adminRouter)



const shopRouter = require('./routes/shop')
app.use('/shop', shopRouter)

const entryRouter = require('./routes/entry')
app.use('/entry', entryRouter)



mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    });
})
.catch(err=>{
    console.log(err);
})
