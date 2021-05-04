'use strict';
const express=require('express');

const router = express.Router();

const logger = require('../middleware/logger.js');
const validat = require('../middleware/validator.js');


router.use(logger); //not working after the routs


const Food=require('../models/food');
const newFoods= new Food;

// add routs

router.get('/food',getFood);
router.get('/food/:id',getOneMeal);
router.post('/food',creatMeal);
router.put('/food/:id',updatFood);
router.delete('/food/:id',deletFood);

function getFood(req,res){
//show all food in mokeDb
  let food= newFoods.get();
  res.status(200).json(food);
}


function getOneMeal(req,res){
  //show One Meal from mokeDb
  let id = req.params.id;
  let oneMeal = newFoods.get(id);
  res.status(200).json(oneMeal);
}


function creatMeal(req,res){
  let obj = req.body;
  let addMeal = newFoods.create(obj);
  res.status(201).json(addMeal);
}


function updatFood(req,res){
  let id = parseFloat(req.params.id);
  const obj = req.body;
  let updatFood = newFoods.update(id,obj);
  res.status(200).json(updatFood);

}

function deletFood(req,res){
  let id = parseFloat(req.params.id);
  let deletedFood = newFoods.delete(id);
  let msg =deletedFood?'Delete this Food':'can not Delete this Recored';
  // let deletStatus= deletedFood?202:204; //deleted done : can's deleted
  res.status(202).json({
    msg:msg,
    checkDelete:deletedFood
  });

}


module.exports = router;
