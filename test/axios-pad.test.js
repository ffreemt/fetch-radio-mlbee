// James Kolce et al. - Modern JavaScript Tools & Skills-SitePoint (2018).epub
// ch5 on axios
// eslint-env mocha
/* eslint-env mocha */
const axios = require('axios')
const assert = require('node:assert')

const logger = require('tracer').colorConsole({
  format: '{{timestamp}} <{{title}}>{{file}}:{{line}}: {{message}}',
  dateformat: 'HH:MM:ss.L',
  level: process.env.TRACER_DEBUG || 'info'
})

// const api_url_ = 'https://hf.space/embed/mikeee/radio-mlbee/+/api/predict/'
const baseURL = 'https://hf.space/embed/mikeee/radio-mlbee/+/api/predict/'

/* radio_mlbee_client.py
def radio_mlbee_client(
    text1: str,
    text2: str,
    split_to_sents: bool = False,
    api_url: Optional[str] = None,
    timeout: httpx.Timeout = timeout_,
) -> List:
text1 = "test1\n a b c\nlove"
text2 = "测试\n爱"
  {'data': [{'headers': ['text1', 'text2', 'llh'],
  'data': [['tes1', '测试', 0.36],
  ['a b c\\love', '爱', 0.67]]}],
  'duration': 0.25752758979797363,
  'average_duration': 0.25752758979797363}
*/
// const baseUrl = api_url_

const text1 = 'test1\n a b c\nlove'
const text2 = '测试\n爱'
const splitToSents = false

// { "data": [text1, text2, split_to_sents, false] }
// 4th param: preview, always set to false

const data = { data: [text1, text2, splitToSents, false] }

// const options = {
// baseUrl
// https://reflectoring.io/tutorial-guide-axios/
// }
const inst = axios.create({
  baseURL,
  timeout: 600000
})
const method = 'post'
let res
// (
const fetch = async () => {
  try {
    // res = await axios.post(api_url_, data)
    res = await inst({
      method,
      data
    })
    logger.debug('res.data: %j', res.data)
    // {"data":[{"headers":["text1","text2","llh"],"data":[["test1","测试",0.7
    // 6],["a b c","",""],["love","爱",0.96]]},null],"duration":0.007451057434082031,"average_duration":0.21120754877726236}
    logger.debug('res.data.data[0].data: %j', res.data.data[0].data)
    // [["test1","测试",0.76],["a b c","",""],["love","爱",0.96]]
    return res.data.data[0].data
  } catch (e) {
    logger.error('%s: %s', e.name, e.message)
    res = e.message
  }
}
// )()

(async () => {
  // const res = await fetch()
  // logger.debug('res: %j', res)
  logger.debug('res: %j', await fetch())
})()

// /*
describe(' casual pad', () => {
  it('should be greater than 0.7', async () => {
    // res:  [["test1","测试",0.76],["a b c","",""],["love","爱",0.96]]
    const res = await fetch()
    logger.debug('res: %j', res)
    assert(res[0][2] > 0.7)
  })
})
// */
