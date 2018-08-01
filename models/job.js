'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  JobSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите описание картинки']
    },
    conditions: {
      type: Array
    },
    requirements: {
      type: Array
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('job', JobSchema);