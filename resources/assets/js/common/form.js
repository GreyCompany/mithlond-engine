import Errors from './errors'

export default class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor (data, hasFile) {
    this.originalData = data
    this.hasFile = (hasFile === true)

    for (let field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  /**
   * Fetch all relevant data for the form.
   */
  data () {
    return this.hasFile ? this.formData() : this.arrayData()
  }

  formData () {
    let data = new FormData()

    for (let property in this.originalData) {
      data.append(property, this[property])
    }

    return data
  }

  arrayData () {
    let data = {}

    for (let property in this.originalData) {
      data[property] = this[property]
    }

    return data
  }

  /**
   * Reset the form fields.
   */
  reset () {
    for (let field in this.originalData) {
      this[field] = ''
    }

    this.errors.clear()
  }

  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post (url) {
    return this.submit('post', url)
  }

  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   */
  put (url) {
    return this.submit('put', url)
  }

  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   */
  patch (url) {
    return this.submit('patch', url)
  }

  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete (url) {
    return this.submit('delete', url)
  }

  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit (requestType, url) {
    return new Promise((resolve, reject) => {
      const sendData = this.data()
      // FormData has problems with PUT and PATCH method. Workaround:
      if (this.hasFile && ['put', 'patch'].indexOf(requestType) !== -1) {
        sendData.append('_method', requestType)
        requestType = 'post'
      }
      axios[requestType](url, sendData)
        .then(response => {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data.errors)

          reject(error.response.data)
        })
    })
  }

  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess (data) {
    // this.reset() // It's wiser to do it by hand
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail (errors) {
    this.errors.record(errors)
  }
}
