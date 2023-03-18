const mongoose = require('mongoose');
const Item = require('../models/Item');
const {getCategory} = require('../controllers/Category');
//create item
let createItem = function(name,desc,category,price,stock,url){
  const item = Item.create({
    name: name,
    desc: desc,
    category: category,
    price: price,
    stock: stock,
    url: url,
  });
  return item;
}
//get item
let getItem = async function(itemName){
  const itemObj = await Item.findOne({name: itemName});
  return itemObj;
}
//get items by category
let getByCat = async function(categoryName){
  const allItems = Item.find({category: categoryName});
  return allItems;
}
//get all items
let getAllItems = async function(){
  const allItems = await Item.find({});
  return allItems;
}
//update item
let updateItem = async function(itemName,itemInput){

}
//delete item
let deleteItem = async function(itemName){
  await Item.deleteOne({name: itemName});
}
module.exports = {createItem,getItem,getAllItems,getByCat,updateItem,deleteItem};