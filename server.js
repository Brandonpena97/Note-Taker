const express = require('express');
const path = require('path');
const notes = require('./db/db.json')

const PORT = 3001;

const app = express(); // initialize an express server and call it 'app'

// middleware
app.use(express.static('public'))


// HTML ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

// API ROUTES
app.get('/api/notes', (req, res) => {
    res.json(notes)
})






app.listen(PORT, () => {
    console.log("Server is running. Listening to port " + PORT)
})