var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Assignment = require('../models/assignment');

router.get("/", function(req, res, next) {
    Assignment.find(function(err, data) {
        res.json(data);
    });
});

router.post("/", function(req, res, next) {
    var newAssignment = new Assignment;
    newAssignment.name = "Michelle";
    newAssignment.score = 80;

    Assignment.create(newAssignment, function(err, post) {
        if (err) console.log(err);
        res.json(post);
    });
});

router.put("/", function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, function(err, post){
        if (err) console.log(err);
        res.json(post)
    });
});

router.delete("/:id", function(req, res, next) {
    Assignment.findByIdAndRemove(req.params.id, function(err, post) {
        if (err) {
            console.log(err);
            res.json(post);
        } else {
            console.log("Delete successful: " + req.params.name)
        }
    });
});

console.log("Assignment route loaded");
module.exports = router;