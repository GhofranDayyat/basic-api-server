'use strict';

module.exports=(req,res,next)=>{ // next mean don't stop after middelwear and excute the CB 
  console.log(`method: ${req.method},path ${req.path}`);
  next();
};
