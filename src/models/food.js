'use strict';

class Food{
  constructor(){
    this.id=0;
    this.mokeDb=[];
  }
  get(id){
    if(id){
      return this.mokeDb.find(recored=>recored.id==id);
    }else{
      return this.mokeDb;
    }
  }



  create(obj){
    let recored ={
      id:++this.id,
      recored:obj ///
    };
    this.mokeDb.push(recored);
    return recored;
  }



  update(id,obj){
    for (let i = 0; i < this.mokeDb.length; i++) {
      if(this.mokeDb[i].id==id){
        this.mokeDb[i].recored=obj;
        return this.mokeDb[i];
      }

    }
  }

  delete(id) {
    let checkDelete=false;
    this.mokeDb=this.mokeDb.filter((obj)=>{
      if(obj.id!=id){
        return true;
      }else{
        checkDelete=true;
        return false;
      }
    });
    return checkDelete;
  }
}


module.exports=Food;


