// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app)
require('./config/session.config')(app)

// default value for title local
const capitalize = require('./utils/capitalize')
const projectName = 'Welcome to Hogwarts remote!'

//some change signed by Diana

app.locals.appTitle = `${capitalize(projectName)}`

// 👇 Start handling routes here
const indexRoutes = require('./routes/index.routes')
app.use('/', indexRoutes)

const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes)

const profileRoutes = require('./routes/profile.routes')
app.use('/profile', profileRoutes)

//Hat quizz bouncer
const hatQuizzRoutes = require('./routes/quizz.routes')
app.use('/hatquiz', hatQuizzRoutes)



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app

// My name is Alexia 
// My name is Diana


