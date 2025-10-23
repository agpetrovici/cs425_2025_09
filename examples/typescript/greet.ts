function greet(name?: string): string {
  if (!name) {
    return "Hello, stranger!";
  }
  return `Hello, ${name}!`;
}

// Example usage:
console.log(greet("Alice"));
