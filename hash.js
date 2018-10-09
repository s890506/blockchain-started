var crypto = require('crypto')

var secret = 'blockchain developer'
var hash1 = crypto.createHmac('sha256', secret)
  .update('created by RedOne')
  .digest('hex')
var hash2 = crypto.createHmac('sha256', hash1)
  .update('powered by III')
  .digest('hex')

console.log('hash ID：', hash2)
