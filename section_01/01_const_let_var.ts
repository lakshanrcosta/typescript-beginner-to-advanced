/* eslint-disable no-var */
/**
 * -- var
 * var declarations are globally or function scoped. They are hoisted to the top of their scope.
 * var variables can be re-declared and updated.
 */

function exampleVar() {
  var x = 5;
  console.log(x); // 5

  if (x) {
    var x = 10;
  }
  console.log(x); // 10
  var x = 20; // Redeclaration is allowed
  console.log(x); // 20
}
exampleVar();

/**
 * -- let
 * let declarations are block-scoped (limited to the nearest curly braces {}) and not hoisted.
 * let variables can be updated but not re-declared.
 */

function exampleLet() {
  const y = 10;
  if (y) {
    const y = 20; // This is a different 'y' variable, scoped to the if block
    console.log(y); // 20
  }
  console.log(y); // 10
}
exampleLet();

/**
 * -- const
 * const declarations are also block-scoped and not hoisted.
 * const variables cannot be re-assigned or re-declared.
 */

function exampleConst() {
  const z = 10;
  // z = 20; // Error: Cannot assign to 'z' because it is a constant
  if (z) {
    const z = 20; // This is a different 'z' variable, scoped to the if block
    console.log(z); // 20
  }
  console.log(z); // 10
}
exampleConst();

/**
 * -- Summery
 * var is deprecated not being used at all. Its still available because of the backwards compatibility.
   In Javascript var can be used when you need function or global scoping and possible re-declaration.
 * Use let when you need block scoping and the variable's value might change.
 * Use const when you need block scoping and the variable's value is meant to remain constant.
 */
