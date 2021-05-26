const mongoose = require('mongoose');
const { stringify } = require('querystring');

const personSchema = new mongoose.Schema({
    rating: Number,
    ratingMax: Number
   
});
  
const rating = mongoose.model('Person', personSchema);


exports.createPerson = (rating, ratingMax) => {
    var person = new rating({
        
    })

    return person
}