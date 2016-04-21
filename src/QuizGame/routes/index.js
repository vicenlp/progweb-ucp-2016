﻿var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('home', { title: 'QuizGame'});
});

router.get('/main', function (req, res) {
    res.render('index', { title: '' });
});

module.exports = router;