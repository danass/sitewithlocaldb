Template.showdata.onCreated(function() {
  console.log("yasalam")
})

Template.showdata.helpers({
  data() {

      return localdb.find({})
    }
})

Template.showdata.events({
  'click ' (e,i) {
    console.log(localdb.find({}).fetch())
  }
})
