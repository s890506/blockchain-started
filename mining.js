var crypto = require('crypto')
var merkle = require('merkle')
var merkleRoot = merkle('sha256')

// Secret
var secret = 'blockchain developer'

// Unverified pool
var tx = ['這是一筆交易資料']

merkleRoot.async(tx, function (err, tree) {
  if (err) {
    console.log('err', err)
  }

  // Merkle Root 的 Hash
  var hashMerkleRoot = tree.level(0)[0]
  var nonce = 0

  var hash = function (nonce) {
    var header = {
      nonce: nonce,
      previousHash: 'dd0e2b79d79be0dfca96b4ad9ac85600097506f06f52bb74f769e02fcc66dec6',
      merkleRoot: hashMerkleRoot
    }

    var hash1 = crypto.createHmac('sha256', secret)
      .update(JSON.stringify(header))
      .digest('hex')

    var hash2 = crypto.createHmac('sha256', hash1)
      .update('powered by III')
      .digest('hex')

    return hash2
  }

  // 開始挖礦，產生新的 hash ID
  while (1) {
    var id = hash(nonce++)
    console.log(nonce + ':', id)
    if (id < '0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF') {
      console.log('success:', id)
      break
    }
  }
})
