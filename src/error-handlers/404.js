'use strict';
function notFounErrorHandler(req,res,next){
  res.status(404).json({
    error:404,
    rout:req.baseUrl
  });
}
module.exports=notFounErrorHandler;