const eventEmitter = require('events').EventEmitter
module.exports = new eventEmitter()

setTimeout(() => {
  module.exports.emit('ready')
}, 1000);