// JavaScript Scope Types Example

// 1. Global Scope
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "I'm global too";

console.log("=== Global Scope ===");
console.log(globalVar); // Accessible anywhere

// 2. Function Scope (var)
function functionScopeExample() {
  var functionVar = "I'm function-scoped";

  if (true) {
    var insideIf = "var ignores block scope";
    console.log(functionVar); // Accessible
  }

  console.log(insideIf); // Still accessible! (var is function-scoped)
}

console.log("\n=== Function Scope ===");
functionScopeExample();
// console.log(functionVar); // Error: not accessible outside function

// 3. Block Scope (let and const)
function blockScopeExample() {
  console.log("\n=== Block Scope ===");

  if (true) {
    let blockLet = "I'm block-scoped";
    const blockConst = "I'm also block-scoped";
    var functionScoped = "I'm function-scoped";

    console.log(blockLet); // Accessible inside block
    console.log(blockConst); // Accessible inside block
  }

  // console.log(blockLet); // Error: not accessible outside block
  // console.log(blockConst); // Error: not accessible outside block
  console.log(functionScoped); // Accessible (var is function-scoped)

  // Block scope in loops
  for (let i = 0; i < 3; i++) {
    // i is block-scoped to this loop
  }
  // console.log(i); // Error: i is not defined

  for (var j = 0; j < 3; j++) {
    // j is function-scoped
  }
  console.log(j); // 3 (accessible because var is function-scoped)
}

blockScopeExample();

// 4. Lexical Scope (Closures)
function outerFunction() {
  const outerVar = "I'm from outer function";

  function innerFunction() {
    console.log(outerVar); // Can access outer function's variables
  }

  return innerFunction;
}

console.log("\n=== Lexical Scope (Closures) ===");
const closure = outerFunction();
closure(); // Still has access to outerVar

// 5. Module Scope (in ES6 modules)
// Each module has its own scope
// Variables declared in a module are not global unless explicitly exported

// 6. Scope Chain Example
const globalValue = "global";

function outer() {
  const outerValue = "outer";

  function middle() {
    const middleValue = "middle";

    function inner() {
      const innerValue = "inner";

      // Can access all variables in the scope chain
      console.log("\n=== Scope Chain ===");
      console.log(innerValue); // inner scope
      console.log(middleValue); // middle scope
      console.log(outerValue); // outer scope
      console.log(globalValue); // global scope
    }

    inner();
  }

  middle();
}

outer();

// 7. Hoisting behavior
console.log("\n=== Hoisting ===");

console.log(hoistedVar); // undefined (var is hoisted but not initialized)
// console.log(hoistedLet); // Error: Cannot access before initialization
// console.log(hoistedConst); // Error: Cannot access before initialization

var hoistedVar = "I'm hoisted";
let hoistedLet = "I'm not hoisted";
const hoistedConst = "I'm not hoisted either";

// Function declarations are fully hoisted
hoistedFunction(); // Works!

function hoistedFunction() {
  console.log("Function declarations are hoisted");
}

// Function expressions are not hoisted
// notHoisted(); // Error: notHoisted is not a function
var notHoisted = function () {
  console.log("Function expressions are not hoisted");
};
