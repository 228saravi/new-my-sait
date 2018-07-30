const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let obj = {
      title: 'Главная страница'
    };
    console.log('eeee');
    Object.assign(obj, req.app.locals.settings);
    res.render('blocks/index', obj);
  });


module.exports = router;