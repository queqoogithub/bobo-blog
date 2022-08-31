const crypto = require('crypto');
  
// Calling randomBytes method with callback
const mytoken = crypto.randomBytes(16).toString('base64')
console.log('MyToken = ', mytoken)

