// RECURSIVE CALL TEMPLATEHELPER 

Template.registerHelper('values', function(o) {
  return function go(o, round) {  
    if (round) {

     let keys =  Object.entries(o[1]).map(val => { return val[0] }) 
     let parent = o[0]
     let values =  Object.entries(o[1]).map(val => { return val[1] }) 

     let data =  keys.map((key, idx) => {
       if (typeof( values[idx] ) != "object" ) { return [parent, key, values[idx] ]  }
       if (typeof( values[idx] ) == "object" ) { return  go([key, values[idx]], true) }
     })

     return data.map(o => { if (typeof(o) == "object") { return o.map(b => { return  b})  } }) 
    }

    return o.map((obj, index) => {

     let keys =  Object.entries(obj).map(val => { return val[0] })
     let values =  Object.entries(obj).map(val => { return val[1] })

       return keys.map((key, i) =>  { 
         let type = typeof(values[i])
         if (type == "object") { return go([key, values[i]], true) }
         else { return  [ key, values[i] ] }
       })

     })
   }(o)

})

//GENERAL HELPERS

Template.registerHelper("eq", function (a, b) {
  return a == b;
});

Template.registerHelper("iNe", function (a, b) {
  if (a !==  undefined) {
  return a.length !== 0
  }
});

Template.registerHelper("has", function (a, b) {
  return a?.includes(b)
});

Template.registerHelper("log", function (o) {
  console.log("log: ", o)
});

Template.registerHelper("lenindex", function (o) {
  return o?.length - 1
});

Template.registerHelper("len", function (o) {
  return o?.length
});

Template.registerHelper("lessthan", function (a, b) {
  return a <= b
});

Template.registerHelper("fetch", function () {
return db.findOne({ _id: this.params().id});
});


Template.registerHelper("id", function (id) {
 return db.find({_id: id}) 
})

Template.registerHelper("date", function (o) {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  d = new Date(o)
  return d?.toLocaleDateString("en-US", options)
});

Template.registerHelper("strmaxwords", function (str, n) {
return str?.split(" ").splice(0,n).join(" ");
});

Template.registerHelper("typeof", function (o) {
  return typeof(o)
  });

Template.registerHelper("single", function (type) {
  return db.find({type:type})
});

Template.registerHelper('key', function(o) {
  return Object.keys(o)
})


Template.registerHelper("arrstr", function (field, compact=false) {
  let str = ''
  if (field) {
    field?.map((f, i) => {
      if (i == field.length - 1) { str += f }
      else { str+= f + " " } 
    })
    if (compact == true) {
      return str?.replace(' ', '-')
    }
    return str
  }
  else { return '' }
});


// PERSONALISED SPACEBAR 

Blaze.Template.registerHelper("youtube", new Template('youtube', function () {
  var view = this;
  var content = '';
  if (view.templateContentBlock) {
    content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
  }
  precontent = '<iframe class="video" src=\"'
  url = 'https://youtube.com/embed/' 
  postcontent = '\"</iframe>'
  video = precontent.concat(url, content, postcontent)
  console.log(video)
  return HTML.Raw(video);
}));

Template.registerHelper('yt_thumbnail', function(id) {
  preurl = 'http://i3.ytimg.com/vi/'
  posturl = '/hqdefault.jpg'
  return preurl.concat(id, posturl)
})
