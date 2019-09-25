'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

// We require exampleEvents, so that we can do something, when
// an example form is submitted
const exampleEvents = require('./examples/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // $('#create-example') selects the `create-example` form on the page
  // the rest says: I want to listen for the `submit` event
  // and then call `exampleEvents.onCreateExample` whenever the form is submitted.
  $('#create-example').on('submit', exampleEvents.onCreateExample)
})
