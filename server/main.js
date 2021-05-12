import { Meteor } from 'meteor/meteor';
import  axios from 'axios'
import _ from 'lodash';

localdb.remove({})

 function removeuser() {
  return Meteor.users.remove({_id: Meteor.user()._id})
 }

 function removeusername(name, userId) {
  
  // Roles.addUsersToRoles(Meteor.user()._id, 'admin', Roles.GLOBAL_GROUP)
  if (isAdmin(userId) == true) {
     return Meteor.users.remove({username: name})
  }
  else {
    console.log("no sufficient rights")
    return "no proper rights"
  }
 }

 Meteor.methods({
  remove() {
    return removeuser()
  },
  removeusername(name, userid) {
    removeusername(name, userid)
  },
  isAdmin(userId) { 
    return isAdmin(userId)
}
})

function isAdmin(userId) { 
  return Roles.userIsInRole(userId,
  ['admin']);
}

data.forEach(o => {
  localdb.insert(o)
})