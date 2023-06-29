const util = require ('util')

//templates
let MyTemplate = `Hi %s, welcome to %s and duration of this course is %d months`;

let u1 = util.format(MyTemplate, "Archu", "Node js", 1.4)
let u2 = util.format(MyTemplate, "Archana", "React js", 1.2)

console.log('user 1 =',u1)
console.log('user 2 =',u2)
