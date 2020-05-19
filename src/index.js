import 'core-js'
// import react from 'react'
const a = '1'
const b = () => 1
const c = {a: 1}
const d = {...c}

const c = Object.assign({}, {a: 1})
const ddd = [1,2,3]
console.log(ddd.includes(1))
console.log(c?.a)

console.log(__DEBUG__)
async function abcd () {
  await Promise.resolve(111)
}
abcd().then(console.log)
