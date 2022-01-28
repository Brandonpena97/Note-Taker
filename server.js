const express = require('express');
const { fstat } = require('fs');
const path = require('path');
const notes = require('./db/db.json')

const PORT = 3001;

const app = express(); // initialize an express server and call it 'app'

function createNewNote (body, ) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname,'./db/db.json')
    )

}

// middleware
app.use(express.static('public'))


// HTML ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

// API ROUTES
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.post('./api/notes', (req, res) => {

    notes.push(req, body);

    fs.writeFileSync("./db/db.json", notes)

    res.json(req.body)
})


app.listen(PORT, () => {
    console.log("Server is running. Listening to port " + PORT)
})