const alarm = {
  remind(msg) {
    alert(msg)
    delete this.timeoutID
  },
  setup() {
    this.cancel()
    const self = this
    this.timeoutID = window.setTimeout((msg) => {
      self.remind(msg)
    }, 1000, 'wake up!')
  },
  cancel() {
    if (typeof this.timeoutID === 'number') {
      window.clearTimeout(this.timeoutID)
      delete this.timeoutID
    }
  }
}

window.onclick = function () {
  alarm.setup()
}