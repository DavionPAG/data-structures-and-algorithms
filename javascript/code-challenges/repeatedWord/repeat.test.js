const repeat = require('./repeat')


let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let str2 = 'plain in spain rain in main'

let str3 = 'plain rain in spain'

describe('Repeated Word Tests', () => {
  it('Should find the first repeated word in a string', () => {
    expect(repeat(str)).toMatch('dolor')
  })
  it('Should find the first repeated word in a string', () => {
    expect(repeat(str2)).toMatch('in')
  })
  it('Should be null if no repeats exist', () => {
    expect(repeat(str3)).toMatch('No matches')
  })
})

