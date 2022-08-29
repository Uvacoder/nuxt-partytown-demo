const path = require('path')
const partytown = require('@builder.io/partytown/utils')

export default async function partytownModule() {
  await partytown.copyLibFiles('./static/~partytown')
  this.addPlugin(path.resolve(__dirname, 'plugin/index.js'))
}
