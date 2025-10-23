function identity<T>(arg: T): T {
    return arg;
}

const stringResult = identity("hello");
const numberResult = identity(42);
const boolResult = identity(true);