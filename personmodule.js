const mongoose = require('mongoose');
const { stringify } = require('querystring');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
   password: String
});
  
const Person = mongoose.model('Person', personSchema);


exports.createPerson = (name, email, password) => {
    var person = new Person({
        name: name, 
        email: email, 
        password: password,
    })

    return person
}