const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let obj = {
      title: 'Админка'
    };
    console.log('eeee');
    Object.assign(obj, req.app.locals.settings);
    res.render('blocks/admin', obj);
  });


module.exports = router;