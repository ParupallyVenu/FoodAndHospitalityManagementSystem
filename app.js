const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require("dotenv").config()
///
const cors = require("cors")
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
])



///



dotenv.config({path: './config.env'});
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middleware
const middleware = (req,res,next)=>{
  console.log("Hello my middleware");
next();
}
app.get('/', (req,res)=>{
  res.send(`Hello world venu`);

});

app.get('/about', middleware , (req,res)=>{
    res.send(`Hell0`);
  
  });
  app.get('/contact', (req,res)=>{
    res.send(`Namaste`);
  
  });
  app.get('/signin', (req,res)=>{
    res.send(`jai balayya`);
  
  });
  app.get('/signup', (req,res)=>{
    res.send(`ohohohohoho`);
  
  });

  app.get('/ordering',(req,res)=>{
    res.send(`booking`);
  })

app.listen(PORT , ()=>{
    console.log("sever is running at port ${PORT}");
})

//database pass = venu1234
////////////////////////////////////////////////////////////////////////////////////////