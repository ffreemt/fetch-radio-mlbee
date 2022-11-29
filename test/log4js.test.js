const log4js = require('log4js')
const log4jsExtend = require('log4js-extend')
const assert = require('assert')

log4jsExtend(log4js, {
  path: __dirname,
  format: 'at @name (@file:@line:@column)'
})

// const logger = log4js.getLogger("category")
const logger = log4js.getLogger('|')
const level = process.env.LOGLEVEL || 'info'

console.log('level: ', level)
logger.level = level

logger.trace('test trace')
logger.debug('test debug')
logger.info('test info')
logger.info(__filename.match(/[\w.-]+$/)[0])

/*
const debug = require("debug")("debug")
const cl = require('get-current-line').default
// const fn = cl0 => () => `${cl0().file.match(/[\w.-]+$/)[0]}-${cl0().line} `
const fn = cl0 => (cl0) => cl0().line

debug(fn(cl) + "a")
debug(fn(cl) + "b")

const repeater = (n) => () => "".padStart(n, "A") + cl().line
A = repeater(4)

debug(A())
debug(repeater(5)())
// */

describe('sanity test', () => {
  it(' assert(true) ', () => {
    assert(true)
  }
  )
}
)
