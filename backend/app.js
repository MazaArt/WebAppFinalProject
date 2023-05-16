const express = require('express')
const app = express()
const db = require('./db/db_connection');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

const create_session_sql = ```
    INSERT INTO Sessions (user_email, game_played, time, additional_info) VALUES (?, ?, ?, ?)
```

app.post('/session', (req, res) => { 
    db.execute(create_session_sql, [req.body.email, req.body.game_played, req.body.time, req.body.additional_info], (error, results) => {
      res.status(201).send("Successfully created session")
    })
})

app.listen(8000);