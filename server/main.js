import { Meteor } from 'meteor/meteor';

localdb.remove({})

data.forEach(o => {
  localdb.insert(o)
})
