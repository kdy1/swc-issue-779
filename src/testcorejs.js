import 'core-js'
const a = Promise.resolve('111')
// async function a () {
//   await Promise.resolve(111)
// }
a().then(console.log)

