const swc = require("@swc/core");
const output = swc.transformSync(`
import 'core-js'
const a = Promise.resolve('111')
a().then(console.log)
`,
{
  "module": {
    "type": "commonjs"
  },
  "env": {
    "targets": {
      "chrome": "79",
      "ie": "11",
      "safari": "11.1"
    },
    "mode": "entry",
    "coreJs": 3
  },
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "decorators": true,
      "dynamicImport": true
    },
    "target": "es2019",
    "loose": true,
    "transform": {
      "optimizer": {
        "globals": {
          "vars": {
            "__DEBUG__": "true"
          }
        }
      }
    }
  }
}
)
console.log(output.code)
// 'use strict';
// require('core-js');
// const a = Promise.resolve('111');
// a().then(console.log);