const swc = require("@swc/core");
const output = swc.transformFileSync(__dirname+'/swcrc-test.js')
console.log(output.code)
