// TypeScript Union Types Example
// Union types allow a value to be one of several types

console.log("=== Union Types in TypeScript ===\n");

// Example 1: Basic union type
type StringOrNumber = string | number;

let value1: StringOrNumber = "hello";
console.log("value1 (string):", value1);

value1 = 42;
console.log("value1 (number):", value1);

// Example 2: Function with union parameter
function printId(id: string | number) {
  console.log("\nYour ID is:", id);

  // Type narrowing with typeof
  if (typeof id === "string") {
    console.log("ID is a string, uppercase:", id.toUpperCase());
  } else {
    console.log("ID is a number, doubled:", id * 2);
  }
}

console.log("\n=== Function with Union Parameter ===");
printId("ABC123");
printId(456);

// Example 3: Union with literal types
type Status = "success" | "error" | "pending";

function handleStatus(status: Status) {
  switch (status) {
    case "success":
      console.log("✓ Operation successful!");
      break;
    case "error":
      console.log("✗ Operation failed!");
      break;
    case "pending":
      console.log("⏳ Operation pending...");
      break;
  }
}

console.log("\n=== Union with Literal Types ===");
handleStatus("success");
handleStatus("error");
handleStatus("pending");

// Example 4: Union with objects
interface Dog {
  type: "dog";
  bark(): void;
}

interface Cat {
  type: "cat";
  meow(): void;
}

type Pet = Dog | Cat;

function makeSound(pet: Pet) {
  // Discriminated union - using 'type' property to narrow
  if (pet.type === "dog") {
    pet.bark();
  } else {
    pet.meow();
  }
}

console.log("\n=== Discriminated Union ===");
const myDog: Dog = {
  type: "dog",
  bark: () => console.log("Woof! Woof!"),
};

const myCat: Cat = {
  type: "cat",
  meow: () => console.log("Meow! Meow!"),
};

makeSound(myDog);
makeSound(myCat);

// Example 5: Array of union types
const mixedArray: (string | number | boolean)[] = [
  "hello",
  42,
  true,
  "world",
  100,
  false,
];

console.log("\n=== Array of Union Types ===");
console.log("Mixed array:", mixedArray);

mixedArray.forEach((item) => {
  console.log(`Value: ${item}, Type: ${typeof item}`);
});

console.log("\n=== Key Takeaway ===");
console.log("Union types (|) allow a value to be one of several types");
console.log(
  "Use type narrowing (typeof, instanceof, discriminated unions) to work with specific types"
);
console.log(
  "Unions are useful for flexible APIs and handling multiple input types"
);
