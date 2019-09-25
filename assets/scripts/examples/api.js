'use strict'

// we require `config` so that we can get our API's url, so we can make requests
// to our API
const config = require('../config')
// require `store` so we have access to our `token`
// so the API knows who we are
const store = require('../store')

// createExample will make a request to our API. Which will create a new example
// we require `formData`, because the API needs to know what fields (text) should be in
// our new `example`
const createExample = function (formData) {
  // we make a request to our API and **return** the result
  return $.ajax({
    // The method is which HTTP verb to use when making the request.
    // We use 'POST', because our documentation told us to!
    method: 'POST',
    // The url our API is expecting, when we create a new example.
    // We use `/examples`, because our documentation told us to!
    url: config.apiUrl + '/examples',
    // This is our authorization header, it tells the API who we are by using
    // our user's token to identify us. Our API, needs to know who we are, to create anything.
    headers: {
      // The `token` was saved in the `store` when we signed up
      // we access it through `store.user.token`
      Authorization: 'Token token=' + store.user.token
    },
    // When we create an example, it needs to know what data (text) that `example`
    // should have.
    data: formData
  })
}

module.exports = {
  createExample
}
