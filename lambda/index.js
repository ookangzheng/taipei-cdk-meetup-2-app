
module.exports.handler = async event => {
  const https = require('https');

  (() => {
    try {
      let resp = https.get('https://oooo.b-cdn.net')
      console.log(`${JSON.stringify(resp)}`)
      return {}
    } catch {
      console.error('Something went wrong')
    }
  })()

};
