import { Meteor } from 'meteor/meteor';
import  axios from 'axios'
import _ from 'lodash';

localdb.remove({})


data.forEach(o => {
  localdb.insert(o)
})
