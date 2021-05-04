'use strict';
require('dotenv').config();

const errorHandler = require('./error-handlers/500.js');
const notFounErrorHandler = require('./error-handlers/404.js');
const foodRouter = require('./routes/food.js');


const express=require('express');
const app = express();


const logger = require('./middleware/logger');
const validat = require('./middleware/validator');



// app.use(logger); //not working after the routs
// app.use(validat);
app.use(express.json());

app.use(foodRouter); // attach  routes module to the app obj
// app.use('/food',foodRouter); 
// app.use('/clothes',foodRouter);




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
