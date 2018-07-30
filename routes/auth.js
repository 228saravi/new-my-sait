const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let obj = {
      title: 'Авторизация'
    };
    console.log('eeee');
    Object.assign(obj, req.app.locals.settings);
    res.render('blocks/auth', obj);
  });


module.exports = router;