'use strict';


function errorHandler(error,req,res,next){
  res.status(500).json({
    error:error,
    msg:`server error is ${error.message}`,
    path:req.path,
    query:req.query
  });
}
module.exports=errorHandler;
