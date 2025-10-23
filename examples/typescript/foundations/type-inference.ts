// TypeScript Type Inference Example
// TypeScript automatically infers types from values and context
// This reduces the need for explicit type annotations

console.log("=== Type Inference in TypeScript ===\n");

// Example1: Object type inference
let person = {
  name: "Alice",
  age: 30,
  isEmployee: true,
}; // Type: { name: string; age: number; isEmployee: boolean; }

console.log("\n=== Object Inference ===");
console.log("person:", person);

// Example 2: Function return type inference
function add(a: number, b: number) {
  return a + b; // Return type inferred as number
}

function greet(name: string) {
  return `Hello, ${name}!`; // Return type inferred as string
}

console.log("\n=== Function Return Type Inference ===");
console.log("add(5, 3):", add(5, 3), "- Return type: number");
console.log('greet("Bob"):', greet("Bob"), "- Return type: string");
