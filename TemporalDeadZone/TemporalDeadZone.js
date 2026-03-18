// Temporal Dead Zone
// The temporal dead zone (TDZ) is a behavior in JavaScript that occurs
//  when you try to access a variable before it has been declared.
// This can lead to a ReferenceError being thrown, 
// as the variable is not yet initialized and is in a "dead zone" until it is declared.

// Example of temporal dead zone
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

