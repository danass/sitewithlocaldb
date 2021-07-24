Template.showdata.onCreated(function() {
  console.log("yasalam")
})


Template.showdata.helpers({
  data() { 
      return localdb.find({})
    }
})
