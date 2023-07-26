require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// cors
app.use(cors({
  origin: 'https://chipper-snickerdoodle-801550.netlify.app',
  credentials: true
}))

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Export app for testing purposes
module.exports = app

// connect to db and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    const server = app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
