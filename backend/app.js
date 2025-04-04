const express = require('express')
const app = express()
const port = 3000
const client = require('./db/conn.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({"message":'Hello World!'})
})

app.get('/blog', async (req, res) => {
    const result = await client.query('SELECT * from blogs')
  res.json({"data":result.rows[0]})
})

app.post('/blog', async (req, res) => {
    const result = await client.query('INSERT INTO blogs (title, image, post) VALUES($1,$2,$3)', [req.body.title, req.body.image, req.body.post])
    res.json({"message" : "added new row" , "desc" : result.rowCount});
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})