const assert = require('assert')
const path = require('path')

/* eslint-env mocha */
console.log(path.parse(__filename))
/* {
  root: 'C:\\',
  dir: 'C:\\...\\test',
  base: 'path.parse.test.js',
  ext: '.js',
  name: 'path.parse.test'
}
// */

describe('sanity test', () => {
  it(' assert ', () => {
    assert(path.parse(__filename).base === 'path.parse.test.js')
  })
})
