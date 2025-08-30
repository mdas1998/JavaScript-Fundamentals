const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog);
app.use('/shop', shop);

app.get('/', (req, res) => {
  res.send('Hello World get!')
  console.log("Hey its a get request")
}).post('/', (req, res) => {
  res.send('Hello World post!')
  console.log("hello world post")
}).put('/', (req, res) => {
  res.send('Hello World put!')
  console.log("hello world put")
}) // chained requests of same endpoint

app.get("/index", (req, res) => {
  console.log("This is index page")
  res.sendFile('templates/index.html', {root: __dirname})
})

app.get("/api", (req, res) => {
  console.log("This is index page")
  res.json({a : 1, b : 2, c : 3 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
