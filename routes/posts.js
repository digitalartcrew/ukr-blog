var express = require("express");
var db = require("../models");
var router = express.Router();

//Index GET /api/Posts/

  router.get('/', function(req,res){
    db.Post.find({}, function(err,posts){
      res.status(200).send(posts);
    });
  });

//Create Post /api/Posts/

router.post('/', function(req,res){
  db.Post.create(req.body,function(err,post){
    res.status(201).send(post);
  });
});

//Get SHOW /api/Posts/:id

router.get('/:id', function(req,res){
  db.Post.findById(req.params.id, function(err,post){
    res.status(200).send(post);
  });
});

//Update PUT /api/Posts/:id

router.put('/:id',function(req,res){
  db.Post.findByIdAndUpdate(req.params.id,req.body, function(err,post){
   if (err) res.status(500).send({error: "Double check for error"});
   res.status(201).send(post);
 });
});

//Delete 

router.delete('/:id', function(req,res){
  db.Post.findByIdAndRemove(req.params.id, function(err,post){
    res.status(200).send(post);
  });
});



module.exports = router;





