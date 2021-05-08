'use strict';
const express=require('express');

const router = express.Router();
const logger = require('../middleware/logger.js');
router.use(logger); //not working after the routs

const modules=require('../models/food');
const food= new modules.Food();
const clothes= new modules.Clothes();

let newModels;

function checkingEndPoint(req, res, next){
  console.log( req.path,'checking path' );
  if (req.path==='/food'){
    newModels= food;
  }else{
    newModels= clothes;

  }
  next();
}


// add routs
router.get('/',getFood);
router.get('/:id',getOneMeal);
router.post('/',creatMeal);
router.put('/:id',updatFood);
router.delete('/:id',deletFood);

router.get('/:id', getOneMeal)

function getFood (req,res){
//show all food in mokeDb
  let newModel= newModels.get();
  console.log(newModel,);
  res.status(200).json(newModel);

}


function getOneMeal(req,res){
  //show One Meal from mokeDb

  let id = req.params.id;
  let oneMeal = newModels.get(id);
  res.status(200).json(oneMeal);
}


function creatMeal(req,res){
  let obj = req.body;
  let addModle = newModels.create(obj);
  res.status(201).json(addModle);

}


function updatFood(req,res){
  let id = parseFloat(req.params.id);
  const obj = req.body;
  let updatFood = newModels.update(id,obj);
  res.status(200).json(updatFood);

}

function deletFood(req,res){
  let id = parseFloat(req.params.id);
  let deletedFood = newModels.delete(id);
  let msg =deletedFood?'Delete this Food':'can not Delete this Recored';
  let deletStatus= deletedFood?202:204; //deleted done : can's deleted
  res.status(deletStatus).json({
    msg:msg,
    checkDelete:deletedFood
  });

}


module.exports ={
  router,
  checkingEndPoint,
} ;

