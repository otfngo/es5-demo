let util = require('./util')

module.exports = {
    aGetFormatDate: function (date) {
        return util.getFormatDate(date, 2)
    }
}