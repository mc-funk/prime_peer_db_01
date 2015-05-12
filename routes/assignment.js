var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Assignment = require('../models/assignment');

router.get("/", function(req, res, next) {
    Assignment.find(function(err, data) {
        res.json(data);
    });
});

router.post("/", function(req, res, next) {
    Assignment.create(req.body, function(err, post) {
        if (err) console.log(err);
        res.json(post);
    });
});

router.put("/:id", function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) console.log(next(err));
        res.json(post)
    });
});

router.delete("/:id", function(req, res, next) {
    Assignment.findByIdAndRemove(req.params.id, function(err, post) {
        if (err) {
            console.log(err);
            res.json(post);
        } else {
            console.log("Delete successful: " + req.params.id)
        }
    });
});

console.log("Assignment route loaded");
module.exports = router;