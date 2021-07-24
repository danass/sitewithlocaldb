import { Meteor } from 'meteor/meteor';
import  axios from 'axios'
import _ from 'lodash';

db.remove({})


data.forEach(o => {
  db.insert(o)
})
