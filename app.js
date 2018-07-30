const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const jsonfile = require('jsonfile');

const fileVersionControl = 'version.json';
const config = require('./config');
// получаем абсолютный путь к папке upload, в которую будут загружаться картинки
// проектов
const uploadDir = path.join(__dirname, config.upload);
// view engine setup
app.set('views', path.join(__dirname, 'build/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));


app.use('/ ',require('./routes/index.js'));
app.use('/auth', require('./routes/auth.js'));


// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
  });
  
  // 500 error handler (middleware)
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
  });
  
  server.listen(3000, 'localhost');
  server.on('listening', function () {
    jsonfile
      .readFile(fileVersionControl, function (err, obj) {
        if (err) {
          console.log('Данные для хеширования ресурсов из version.json не прочитаны');
          console.log('Сервер остановлен');
          process.exit(1);
        } else {
          app.locals.settings = {
            suffix: obj.suffix,
            version: obj.version
          };
          console.log('Данные для хеширования ресурсов из version.json прочитаны');
  
          //если такой папки нет - создаем ее
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
          }
  
          console.log('Express server started on port %s at %s', server.address().port, server.address().address);
        }
      });
  });