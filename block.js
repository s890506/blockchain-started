function Block(block) {
  this.hash = block.hash || ''
  this.previousHash = block.previousHash || ''
  this.timestamp = block.timestamp || new Date()
  this.merkleRoot = block.merkleRoot || {}
  this.difficulty = block.difficulty || '00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'
}