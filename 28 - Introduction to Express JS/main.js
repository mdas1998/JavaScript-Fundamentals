const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) // serve static files

app.get('/', (req, res) => {
  res.send('Welcome to the main page!')
})

app.get('/about', (req, res) => {
  res.send('Hello about section!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog/:slug/:second', (req, res) => {
  // logic to fetch slug from the db
  console.log(req.params); // output will be {
  //  slug: 'intro-to-jingalala',
  //  second: 'dhinchakPooja'
// }
console.log(req.query); // output will be 'mode=darkmode&region=India' 
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Introduction to JS!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Introduction to Python !')
// })

// app.get('/blog/intro-to-spline', (req, res) => {
//   res.send('Introduction to Spline !')
// })

// app.get('/blog/intro-to-threejs', (req, res) => {
//   res.send('Introduction to Three JS !')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 