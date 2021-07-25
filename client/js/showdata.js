Template.simplified.onCreated(function () {})
Template.simplified.helpers({ data() { return localdb.find({}) } })

Template.registerHelper('table', function recur(o, bool) {
  
  if (bool == true && o instanceof Object ) {
    let entries = Object.entries(o).map(entry => {
      let key = entry[0]
      let value = entry[1]
      console.log("fck", value)
      return (
        HTML.TABLE({class: 'tuple-vk'},
           HTML.TD({'class': 'item-k'}, HTML.B(key)),
           HTML.TD({'class': 'item-v'}, (value instanceof Object)? recur(value, true): value )  )
           
    )
    })
   return entries
  }

  let entries = Object.entries(o).map(entry => {
    
    let key = entry[0]
    let value = entry[1]

    console.log(value,"bitch")
    return (
        HTML.TR({class: 'tuple'},
           HTML.TD({'class': 'item-key'}, HTML.B(key)),
           HTML.TD({'class': 'item-val'}, (value instanceof Object)? recur(value, true):  HTML.TABLE(value) )  )
    )
  })
  
  render = HTML.toHTML( HTML.TABLE({class:"entry"},entries))
  console.log(render)
  return render


})
