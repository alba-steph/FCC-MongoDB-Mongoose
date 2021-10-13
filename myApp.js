const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
// const personSchema = new Schema({
//   name: { type: String, required: true },
//   age: Number,
//   favoriteFoods: [String],
// });
// const Person = mongoose.model("Person", personSchema);

// const createAndSavePerson = (done) => {
//   const felicity = new Person({
//     name: "Sally",
//     age: 40,
//     favoriteFoods: ["Lucky Charms", "popcorn", "Brussels sprouts"],
//   });
//   felicity.save((err, data) => {
//     if (err) return console.error(err);
//     done(null, data);
//   });
// };
var personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});
var Person = mongoose.model('Person', personSchema);
var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Tuulabear", age: 12, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

// const createAndSavePerson = () => {
//   const felicity = new Person({
//     name: "Felicity",
//     age: 18,
//     favoriteFoods: ["Lucky Charms", "popcorn", "Brussels sprouts"],
//   });
//   felicity.save((err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//     return data;
//   });
// };

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
