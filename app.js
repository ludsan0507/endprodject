const express = require('express')
const app = express()
const port = 3000

const nameList= ["", ""]

const personmodul = require('./Personmodule')
const store = require('./mongodbTest')

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/style.css', (req, res) => {
    res.sendFile(clientDir + 'index')
})

app.post('/', (req,res) => {

    let person = personmodul.createPerson(req.body.name, req.body.email, req.body.age)
    person.store();
    res.redirect('/')
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))

