const express = require('C:/Users/pomix/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function (req, res) {
  let obj = {
    title: 'Админка'
  };
  Object.assign(obj, req.app.locals.settings);
  const Model = mongoose.model('job');
  Model.find().then(result=>{
    Object.assign(obj,{items: result} );
    return res.render('blocks/admin', obj);
  });
  
});
router.post('/unloadJob', function (req, res) {
  const Model = mongoose.model('job');
  Model.find().then(result=>{
    console.log(result);
    return res.json(result);
  });

});

router.post('/idjobs', function (req, res) {
  const Model = mongoose.model('job');
  Model.findById(req.body._id).then(result=>{
    console.log(result);
    return res.json(result);
  });

});
router.post('/addJob', function (req, res) {


  if (!req.body.head || !req.body['condision[]'] || !req.body['requir[]']) {
    //если что-либо не указано - сообщаем об этом
    return res.json({status: 'Укажите данные!'});
  }
  //создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model('job');
  let item = new Model({name: req.body.head, conditions: req.body['condision[]'], requirements: req.body['requir[]']});
 
    //обрабатываем и отправляем ответ в браузер
  item.save().then(
    //обрабатываем и отправляем ответ в браузер
    (i) => {
      return res.json({status: 'Запись успешно добавлена'});
    }, e => {
      //если есть ошибки, то получаем их список и так же передаем в шаблон
    const error = Object
        .keys(e.errors)
        .map(key => e.errors[key].message)
        .join(', ');

      //обрабатываем шаблон и отправляем его в браузер
    res.json({
      status: 'При добавление записи произошла ошибка: ' + error
    });
  });
});



module.exports = router;