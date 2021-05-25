const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 3000

const nameList= ["", ""]

const personmodul = require('./Personmodule')
const store = require('./mongodbTest')

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(clientDir))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req,res) => {

    let person = personmodul.createPerson(req.body.name, req.body.email, req.body.password)
    store.storeElement(person);
    res.redirect('/')
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))

