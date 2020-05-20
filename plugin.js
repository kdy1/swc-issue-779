
const {default: Visitor} = require("@swc/core/Visitor");
const swc = require("@swc/core");
const { plugins } = require('@swc/core')

class ConsoleStripper extends Visitor {
  visitCallExpression(e) {
    if (e.callee.type !== "MemberExpression") {
      return e;
    }

    if (
      e.callee.object.type === "Identifier" &&
      e.callee.object.value === "console"
    ) {
      if (e.callee.property.type === "Identifier") {
        return {
          type: "UnaryExpression",
          span: e.span,
          operator: "void",
          argument: {
            type: "NumericLiteral",
            span: e.span,
            value: 0
          }
        };
      }
    }

    return e;
  }
}
const consoleStripper =  new ConsoleStripper()
const out = swc.transformSync(
  `
if (foo) {
    console.log("Foo")
} else {
    console.log("Bar")
}`,
  {
    plugin: plugins([consoleStripper.visitProgram.bind(consoleStripper)])
  }
);
console.log(out.code)
console.log(out.code ===
  `if (foo) {
    void 0;
} else {
    void 0;
}`);