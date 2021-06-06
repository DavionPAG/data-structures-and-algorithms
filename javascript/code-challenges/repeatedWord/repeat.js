'use strict';

let repeat = str => {
  let regex = str.match(/\w+/g)

  let match = null

  while (match === null) {
    let word = regex.shift()
    regex.includes(word) ? match = word : null
    if (regex.length < 1) match = 'No matches'
  }
  return match
}
module.exports = repeat