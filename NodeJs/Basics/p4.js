const numbers = require('./content/numbers')
const names = require('./content/names')
const method = require('./content/method')

method.sayHi(names.user1)
method.sayHi(names.user2)
method.sayHi(names.user3)

console.log('sum =', method.sum(numbers.x, numbers.y, numbers.z))