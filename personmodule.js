const mongoose = require('mongoose');
const { stringify } = require('querystring');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
   
});
  
const Person = mongoose.model('Person', personSchema);


exports.createPerson = (name, email, age) => {
    var person = new Person({
        name: name, 
        email: email, 
        
    })

    return person
}