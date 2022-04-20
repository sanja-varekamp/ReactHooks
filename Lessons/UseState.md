Use state() is a function that returns an array of two values: 
    * The initial value of the state(state variable)
    * A function that updates the initial value of the state
(state update function)
So we can think of them as a getter and a setter.

### Definition of getters and setters in JS
(In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords: get - to define a getter method to get the property value. set - to define a setter method to set the property value.)

### One important caveat in the invocation of useState(): 
it can NOT be called in a conditional! It can only be used in the main body of the function.

### useState() remembers the new state!
React will remember the value of the state variable whenever the function rerenders. But rather than reinstatiating it, it remembers its value and it's not going to be overwritten by a simple rerender.

###useState() hook with an Object Argument IMPORTANT TO KNOW!
When updating the state of only one property of an object, there is a catch: unlike the class based state which MERGES the object, hooks are rewriting it; therefore, it can override the initial state of other properties of the object and return undefined. 

To avoid this, everytime we are updating some property, we use ...state before it, as to ensure the merging of the new state of the property we are updating, and the other properties which are not changed. 

This is just one way of dealing with state on an object, based on the old react paradigm. 

### The better way
The better way to update state on multiple object properties, is to simply use the useState() hook multiple times, as per the recommendation of the official documentation. This effectively solves the problem, and cleans up the mess of tracking the state in one variable, while  it can be split in multiple variables. 
