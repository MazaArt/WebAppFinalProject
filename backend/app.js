const express = require('express')
const app = express()
const db = require('./db/db_connection');
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

const create_session_sql = "INSERT INTO Sessions (user_email, game_played, time, additional_info) VALUES (?, ?, ?, ?)"

app.post('/session', (req, res) => { 
    db.execute(create_session_sql, [req.body.email, req.body.game_played, req.body.time, req.body.additional_info], (error, results) => {
      res.status(201).send("Successfully created session")
    })
})

const get_all_sessions = "SELECT * FROM Sessions"

app.get("/session", (req, res) => {
  db.execute(get_all_sessions, (error, results) => {
    console.log(results)
    res.status(200).send(results)
  })
})

app.listen(8000);