// TypeScript Structural Typing Example
// TypeScript uses structural typing (also called "duck typing")
// Compatibility is based on shape/structure, not explicit declarations

console.log("=== Structural Typing in TypeScript ===\n");

// In TypeScript, two types are compatible if their structures match
// This is different from nominal typing (like in Java/C#) where types must be explicitly declared

// Example 1: Basic structural compatibility
interface Point2D {
  x: number;
  y: number;
}

interface Vector2D {
  x: number;
  y: number;
}

// Even though Point2D and Vector2D are different interfaces,
// they are structurally identical and thus interchangeable
const point: Point2D = { x: 10, y: 20 };
const vector: Vector2D = point; // No error! Same structure

console.log("Point:", point);
console.log("Vector (assigned from point):", vector);

// Example 2: Excess properties are allowed
interface Person {
  name: string;
  age: number;
}

const employee = {
  name: "Alice",
  age: 30,
  department: "Engineering", // Extra property
  salary: 100000, // Extra property
};

// employee can be assigned to Person because it has all required properties
const person: Person = employee;
console.log("\nPerson (from employee):", person);
console.log("Employee has extra properties:", employee);

// Example 3: Functions and structural typing
interface Printable {
  print(): void;
}

class Document2 {
  print() {
    console.log("Printing document...");
  }
}

class Photo2 {
  print() {
    console.log("Printing photo...");
  }
  // Photo2 has additional methods, but still compatible with Printable
  resize() {
    console.log("Resizing photo...");
  }
}

function printItem(item: Printable) {
  item.print();
}

console.log("\n=== Function Parameter Compatibility ===");
printItem(new Document2()); // Works
printItem(new Photo2()); // Also works - structural compatibility

// Example 4: Missing properties cause errors (in TypeScript)
// Uncomment in a .ts file to see the error:
// const incomplete = { name: "Bob" };
// const person2: Person = incomplete; // Error: missing 'age' property

console.log("\n=== Key Takeaway ===");
console.log(
  "TypeScript checks if an object has the required structure (properties/methods)"
);
console.log("It doesn't care about the declared type name or class hierarchy");
console.log("If it looks like a duck and quacks like a duck, it's a duck!");
