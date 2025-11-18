/**
Problem 1:
Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:

If the input is a string → return the string in uppercase
If the input is a number → return the number multiplied by 10
If the input is a boolean → return the opposite value (true → false, false → true)

Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case.

Sample Input:
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

Sample Output:
HELLO;
50;
false;


*/
function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

/**
Problem 2:
Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

If the input is a string → return the number of characters.
If the input is an array → return the number of elements.

Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case (typeof or Array.isArray).

Sample Input:
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
Sample Output:
10;
4;


*/
function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

/**
Problem 3:
Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

Requirements:
You must use a constructor to initialize the properties.
The getDetails method should return a string in the format: "Name: [name], Age: [age]".

Sample Input:
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());
*/

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name,
    this.age = age,
  }
  const getDetails(){
    
  }
}
