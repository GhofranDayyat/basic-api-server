'use strict';
require('dotenv').config();

const errorHandler = require('./error-handlers/500.js');
const notFounErrorHandler = require('./error-handlers/404.js');

const Routers = require('./routes/food.js');
const router = Routers.router;
const checking = Routers.checkingEndPoint;


const express=require('express');
const app = express();
app.use(express.json()); //add the body to the req object
// app.use(express.urlencoded({ extended: true }));


// app.use(foodRouter); // attach  routes module to the app obj
app.use(checking);// attach the checking midlwear to determin which rout should contenue next//should be befor the routs below
app.use('/food',router);
app.use('/clothes',router);



//add handlers //should be after routs
app.use('*',notFounErrorHandler);
app.use(errorHandler);

// Listening
function start(port){

  app.listen(port,()=>console.log(`listning on PORT${port}`));
}


//Modularity
module.exports={
  app:app,
  start:start,
};
