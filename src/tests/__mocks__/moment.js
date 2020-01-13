
// This lets us call the original (not mocked) moment)
const moment = require.requireActual('moment')

export default (timeStamp = 0) => {
    return moment(timeStamp);
}