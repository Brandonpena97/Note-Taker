const express = require('express');
const { fs } = require('fs');
const path = require('path');
const notes = require('./db/db.json');
const uniqid = require('uniqid');

const PORT = process.env.PORT || 3001;

const app = express(); // initialize an express server and call it 'app'

//function createNewNote (body, ) {
    //const note = body;
    //notesArray.push(note);
    //fs.writeFileSync(
       // path.join(__dirname,'./db/db.json')
    //)

//}

// middleware
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


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

app.post('/api/notes', (req, res) => {

    const newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    notes.push(newNote);

    fs.writeFileSync("./db/db.json", json.stringify(notes))

    res.json(req.body)
})


app.listen(PORT, () => {
    console.log("Server is running. Listening to port " + PORT)
})