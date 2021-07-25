Template.simplified.onCreated(function () {})
Template.simplified.helpers({ data() { return localdb.find({}) } })

Template.registerHelper('table', function recur(o) {
  let entries = Object.entries(o).map(entries => {
    let key = entries[0]
    let value = entries[1]
    return HTML.TD(
      HTML.B(
        key),
     value instanceof Object ? recur(value): HTML.TD(value)  
    //  value instanceof Array ? "WAAYAY Array": ""
    )
  })
  return HTML.toHTML(HTML.TR(entries))

})
