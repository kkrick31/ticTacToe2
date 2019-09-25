'use strict'

// a helper function, that will show a success message
// success messages are currently green and they clear the form when submitted
const successMessage = function (newText) {
  // selects the message heading, and replaces its text
  $('#message').text(newText)

  // removes the red, failure styling and then adds the green success styling
  // these css classes come from assets/styles/index.scss
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clears all forms on the page
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

// if the API created our example succesfully, we want to update our webpage
const onCreateExampleSuccess = function () {
  // we use our helper function, to show the message 'Created example successfully!' and reset the forms
  successMessage('Created example successfully!')
}

// if the API couldnt create our example, then we want to show our user an error message
const onCreateExampleFailure = function () {
  failureMessage('Creating example failed')
}

module.exports = {
  onCreateExampleSuccess,
  onCreateExampleFailure
}
