var express = require('express');
var router = express.Router();

const data = require('../data');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Canon Camera' });

});
router.get('/:user', function(req, res, next) {
  console.log('data:',data);
  console.log('user:',req.params.user);
  res.render('index', data[req.params.user]);
});
module.exports = router;
