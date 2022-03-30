Use state() is a function that returns two values: 
    * The initial value of the state
    * A function that updates the initial value of the state
So we can think of them as a getter and a setter.

### Definition of getters and setters in JS
(In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords: get - to define a getter method to get the property value. set - to define a setter method to set the property value.)

###One important caveat in the invocation of useState(): 
it can NOT be called in a conditional! It can only be used in the main body of the function. 
