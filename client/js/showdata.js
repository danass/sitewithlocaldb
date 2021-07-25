Template.simplified.onCreated(function () {})
Template.simplified.helpers({ data() { return localdb.find({}) } })

Template.registerHelper('table', function recur(o, bool) {
  
  if (bool == true && o instanceof Object ) {
    console.log("allo", o)
    let entries = Object.entries(o).map(entries => {
      let key = entries[0]
      let value = entries[1]
      return HTML.TD(
              HTML.B(
                key),
                value instanceof Object ? recur(value, true): HTML.TD(value)  )
    })
   return HTML.TD(entries)
  }

  let entries = Object.entries(o).map(entries => {
    let key = entries[0]
    let value = entries[1]
    return HTML.TD(
      HTML.B(
        key),
     value instanceof Object ? recur(value, true): HTML.TD(value)  
    //  value instanceof Array ? "WAAYAY Array": ""
    )
  })
  
  return HTML.toHTML(HTML.TR(entries))

})
