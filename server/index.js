require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()

const {PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db',dbInstance)
    console.log('db connection complete')
}).catch(err => console.log(err))

app.use(express.json())


app.get('/api/houses', controller.getHouses)


app.listen(PORT, () => console.log(`aye yo dood, ${PORT} is connected yo!`))