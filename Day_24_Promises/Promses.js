// Promise
// 1. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// 2. A promise can be in one of three states: pending, fulfilled, or rejected.
// 3. A promise is created using the Promise constructor, which takes a function as an argument. 
//    This function is called the executor function, and it is executed immediately when the promise is created.
// 4. The executor function takes two arguments: resolve and reject.
//    These are functions that are used to change the state of the promise from pending to fulfilled or rejected, respectively.
// 5. A promise can be consumed using the then method, which takes two arguments: 
//    a callback function that is called when the promise is fulfilled, 
//    and a callback function that is called when the promise is rejected.
// 6. The then method returns a new promise, which allows for chaining of multiple then calls.
const cart  = ["mobile", "laptop", "headphones  "];

createorder(cart, (orderid) => {
    proceedtopayment(orderid, (paymentinfo) => {
        showordersummary(paymentinfo, () => {
            updatewallet();
        })
    })
}) 

// Promise chaining
// In promise chaining, we can chain multiple then calls together to handle the asynchronous operations 
// in a more readable and maintainable way. Each then call returns a new promise, which allows us to chain the next then call to it. This way, we can avoid callback hell and make our code more organized.
// Example of promise chaining:
// Assuming createorder, proceedtopayment, showordersummary, and updatewallet are functions that return promises

createorder(cart)
.then(function (orderid){
    return proceedtopayment(orderid);
})
.then(function (paymentinfo){
    return showordersummary(paymentinfo);
})
.then(function (paymentinfo){
    return updatewallet(paymentinfo);
})


// Or using arrow functions for more concise code:
// Assuming createorder, proceedtopayment, showordersummary, and updatewallet are functions that return promises

createorder(cart)
.then( (orderid)=> proceedtopayment(orderid))
.then( (paymentinfo) => showordersummary(paymentinfo))
.then( (paymentinfo) => updatewallet(paymentinfo));





