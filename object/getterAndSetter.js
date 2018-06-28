const cart = {
  _wheels: 4,
  
  get wheels() {
    return this._wheels
  },

  set wheels(value) {
    if (value < this._wheels) {
      throw new Error('the value is too small')
    }
    this._wheels = value
  }
}