  data = [
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
        type: "Person"
        },
      titre: "king of the",
      repas: {
        plat: "salade tomate oignons",
        dessert: "la bissara en dessert",
        boissons: { 
          cocktail: "i love you weh on the beach",
          jus: "ay+hyawa liquor",
          café: {
            café2: "café noir",
            
            café1: {
              titre: "noss noss",
              composition: {
                ingredients: ["sucre", "café", "cacao", "lait"],
                histoire: ["le café à une histoire incroyable"],
                prix: 12
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
  }
  ]

data.map(o => {
  localdb.upsert(o._id, o)
  })