const Router = module.exports = require('express').Router()
const {User} = require('../models/index.js')


Router.post("/" , (req,res)=>{
    
})

Router.get("/search" , (req,res)=>{
    var regex = { $regex: req.query.keyword, $options: 'i' }
    User.aggregate([
    { $project: { "name" : { $concat : [ "$firstname", " ", "$lastname" ] } }},
    {  $match: {"name": regex}}
  //   {$count : "length"}
  ]).exec(function(err, results) {
    console.log(results)
      res.json(results)
  });
})