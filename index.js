const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';


// Connection to the database "recipe-app"
mongoose
    .connect(MONGODB_URI)
    .then(x => {
        console.log(`Connected to the database: "${x.connection.name}"`);
        // Before adding any recipes to the database, let's remove all existing ones
        // Iteration 2
    })
    /*
      .then(() => {
          let friedEggs = {
            "title": "Omelette",
            "level": "Easy Peasy",
            "ingredients": [
              "2 egg",
              "1 tablespoons olive oil",
              "Some cheese",
              "A bit salt"
            ],
            "cuisine": "french",
            "dishType": "breakfast",
            "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
            "duration": 5,
            "creator": "Chef Chof"
          }
          return Recipe.create(friedEggs)
        })

        // Iteration 3 - Insert multiple recipes

        .then((newRecipe) => {console.log(newRecipe.title)}) 
        .then(()=> {
          return Recipe.insertMany(data)
        })
        .then((arrRecipe)=>{
          arrRecipe.forEach(element => {
            console.log(element.title)
          })
        }) 

    */

// Iteration 4 - Update recipe

.then(() => { return Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }, { new: true }) })

.then(() => { console.log("sucessUpdate") })

.then(() => { return Recipe.deleteOne({ title: "Carrot Cake" }) })

.then(() => { console.log("sucessDelete") });

// Iteration 5 - Remove a recipe

Recipe.deleteOne({ title: "Carrot Cake" })
    .then(() => { console.log("sucessDelete") })

// Iteration 6 - Close the Database

.finally(() => {
    mongoose.connection.close()
    console.log("databaseClosed")
})

.catch(error => {
    console.error('Error connecting to the database', error);
});