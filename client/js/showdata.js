Template.simplified.onCreated(function () {})
Template.simplified.helpers({ data() { return localdb.find({}) } })

Template.registerHelper('table', function recur(o, bool) {
  
  if (bool == true && o instanceof Object ) {
    let entries = Object.entries(o).map(entry => {
      let key = entry[0]
      let value = entry[1]
      return (

        HTML.TR({class: 'tuple'},
           HTML.TD({'class': 'item'}, HTML.B(key)),
           HTML.TD({'class': 'item'}, (value instanceof Object)? recur(value, true): value )  )
           
    )
    })
   return HTML.TD(entries)
  }

  let entries = Object.entries(o).map(entry => {
    
    let key = entry[0]
    let value = entry[1]

      console.log(entry,"bitch")
    return (
        HTML.TR({class: 'tuple'},
           HTML.TD({'class': 'item'}, HTML.B(key)),
           HTML.TD({'class': 'item'}, (value instanceof Object)? recur(value, true): value )  )
    )
    
  })
  render = HTML.toHTML( HTML.TABLE(entries))
    console.log(render)
  return render


})
