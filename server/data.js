  data = [

    {
      level0key: "val"
    },
    {
      key: {
        subkey: "val"
      }
    },
    {
      level_0_key: {
        level_1_key: "val"
      },
      level_0_key2: {
        level_1_key: "val",
        level_1_key2: "val"
      }
    },
    {
      key123: ["val1", "val2", "val3 "]
    },
    {
      fields: {
        Name: "Daniel",
        LastName: "Assayag",
        type:"Person"
        }
    },
    {
      fields: { 
        Name: "John",
        LastName: "Galiano",
        Age: 22,
        type: "Person",
        alternativetype: "Perso-Hybrid-1"
        },

      title: "king of the",
      Meal: {
        First: "salade tomate oignons",
        Dessert: "the bissara",
        Drinks: { 
          cocktail: "i love you weh on the beach",
          juice: "ahyawah liquor",
          cofee: {
            café2: "café noir",
            café1: {
              titre: "noss noss",
              composition: {
                ingredients: ["sucre", "café", "cacao", "lait"],
                history: ["the café has an incredible histoire "],
                price: { 
                  unit: "dollar",
                  price:"12",
                  nomatterhowdeep:"you go it will still print out"
                }
              }
            }
          }
        }
      }
    },

    {
    untypedobject: {
      dear: "father"
    }
    },
    {
      // structure of data that could be the bare minimum basis for all objects
      id:  "by creating an new object in the database, mongo will give it _id automatically",
      label: "this label could be the name of a class of objects",
      fields: {
        field1: "this is the content of the first field of the object",
        field2: "value of field2",
        field3: {
          content: "field3 could itself contain a new object ",
          meta: "and each object could contain another one",
          or: ["or they could", "contain", "an array"]
        }
      }

    },
  ]


  data2 = [
    {
      keyo: "valo"
    },
    {
      key: ["val1", "val2", "val3"]
    },
    {
      key: {
        subkey: "val"
      }
    },
    {
      key1: {
        subkey1: "val"
      },
      key2: {
        subkey1: "val",
        subkey2: "val"
      }
    }
  ]

  