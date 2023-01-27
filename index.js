const express = require('express')
const app = express()
const port = 3000
const auth = require('./authentication')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users' , auth , require('./routes/user') )
app.use('/login' , auth , require('./routes/login') )

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`)
// })

