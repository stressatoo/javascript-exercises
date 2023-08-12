/*
Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
*/

const sumAll = function(first, second) {
    let finalSum = 0;
    for (let counter = first; counter <= second; counter++) {
        finalSum += counter;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
