// Higher Order Functions
// A higher order function is a function that takes another function as an argument or returns a function as a result.
// In this case, we can create a higher order function that takes an array of radius and an operation (area or circumference) as arguments and returns the result of the operation on each radius.
// This way, we can avoid repeating the code for calculating area and circumference and make our code more reusable and cleaner.
// We can also use arrow functions to make our code more concise and readable.
const radius =[1,2,3,4]

const area = function (radius){
    const output = []
    for(let i=0; i < radius.length; i++){
        output.push( Math.PI * radius[i] * radius[i] );
    } return output;
}
console.log(area(radius))

         // Using Arrow Function
// const area =  (radius) => {
//     const output = []
//     for(let i=0; i < radius.length; i++){
//         output.push( Math.PI * radius[i] * radius[i] );
//     } return output;
// }




const circumference = function (radius){
    const output = [];
    for( i=0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }return output;

}

console.log(circumference(radius));

// Using Dry Principle
// DRY - Don't Repeat Yourself
// We can use higher order functions to avoid repeating code and make our code more reusable and cleaner.
// A higher order function is a function that takes another function as an argument or returns a function as a result.
// In this case, we can create a higher order function that takes an array of radius and an operation (area or circumference) as arguments and returns the result of the operation on each radius.
// This way, we can avoid repeating the code for calculating area and circumference and make our code more reusable and cleaner.
// We can also use arrow functions to make our code more concise and readable.
// We can also use the map method to make our code more concise and readable. The map method creates a new array with the results of calling a provided function on every element in the calling array.
// We can also use the forEach method to make our code more concise and readable. The forEach method executes a provided function once for each array element.
// We can also use the reduce method to make our code more concise and readable. The reduce method executes a reducer function on each element of the array, resulting in a single output value.
// We can also use the filter method to make our code more concise and readable. The filter method creates a new array with all elements that pass the test implemented by the provided function.
// We can also use the find method to make our code more concise and readable. The find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// We can also use the findIndex method to make our code more concise and readable. The findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
// We can also use the some method to make our code more concise and readable. The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// We can also use the every method to make our code more concise and readable. The every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// We can also use the sort method to make our code more concise and readable. The sort method sorts the elements of an array in place and returns the sorted array.
// We can also use the reverse method to make our code more concise and readable. The reverse method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// We can also use the concat method to make our code more concise and readable. The concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// We can also use the slice method to make our code more concise and readable. The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// We can also use the splice method to make our code more concise and readable. The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The splice method returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
// We can also use the join method to make our code more concise and readable. The join method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. If the array is empty, then an empty string will be returned.
// We can also use the split method to make our code more concise and readable. The split method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. The second parameter is a limit on the number of splits to be found. The split method does not change the original string.
// We can also use the trim method to make our code more concise and readable. The trim method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
// We can also use the toUpperCase method to make our code more concise and readable. The toUpperCase method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
// We can also use the toLowerCase method to make our code more concise and readable. The toLowerCase method returns the calling string value converted to lowercase (the value will be converted to a string if it isn't one).



const radiusArr =[1,2,3,4]

const area1 = function(radius){
    return Math.PI * radius * radius;
}

const circumference1 = function (radius){
    return 2 * Math.PI * radius;
}


const calc = function(radiusArr, operation){
    const output = [];
    for(i =0; i<radiusArr.length; i++){
        output.push(operation(radiusArr[i]))
    } return output;
}


console.log(calc(radiusArr,area1));
console.log(calc(radiusArr, circumference1));

