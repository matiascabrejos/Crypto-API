const express = require('express')
const request = require('request')
const axios = require('axios')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(express.static('views'))


app.listen(3000)
