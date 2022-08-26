const express = require('express')
const db = require('./db')
const routes = require('/routes')

const PORT = process.env.PORT || 3001
const app = express()

//middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//apiroutes
app.use(routes)

