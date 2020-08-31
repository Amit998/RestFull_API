const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv/config');
const postsRoute =require('./route/posts.js');
const cors= require('cors')
const bodyParser = require('body-parser')


// Middleware

app.use(bodyParser.json())
app.use(cors())


app.use('/posts',postsRoute)

// Routes
app.get('/',(req,res) =>{
    res.send('We Are Home')

});


// app.get('/posts',(req,res) =>{
//     res.send('This Is Posts')
// });

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect(process.env.DB_Connection,()=>{
   
    console.log('connected')
})

// How To start Listing
app.listen(3000)