'use strict'

// We require `getFormFields` so we can access the data
// in our forms
const getFormFields = require('../../../lib/get-form-fields')

// we require api, so we can make requests to our server
const api = require('./api')
// we require ui, so we can update our page after a request
// to our api
const ui = require('./ui')

// we create an event handler, that will be called whenever
// the "create example" form is submitted
const onCreateExample = function (event) {
  // This prevents the default action of refreshing the page
  // when a form is submitted.
  event.preventDefault()

  // `event.target` is whatever emitted the `event`
  // in our case, the form emitted the event when it was submitted
  const form = event.target
  // we get our form's data using getFormFields
  const formData = getFormFields(form)
  console.log('formData is', formData)

  // we make a request to our api, to create an example.
  // we pass `formData` to `createExample`, so it knows what fields our new
  // `example` resource, should have
  api.createExample(formData)
    // if our request is succesful *then* we should run `ui.onCreateExampleSuccess`
    .then(ui.onCreateExampleSuccess)
    // otherwise, there was an error, so we'll catch the error and call `ui.onCreateExampleFailure`
    .catch(ui.onCreateExampleFailure)
}

module.exports = {
  onCreateExample
}
