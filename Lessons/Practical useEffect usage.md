### The importance of teardown and browser memory

In the practical example in App.js, we see the necessity of the teardown (return) function of useEffect(), in order to prevent a memory clog in the browser. What happens is: in case of no teardown, it multiplies the event listeners and the browser keeps them all in count. This is to be checked in the console, by invoking the getEventListeners(window) function and checking the object it returns. 

It's imperative, to remove the event listeners on rerender, so the component can dismount and not clog up space unnecessarily. 

Failing to do so, introduces what is known as a memory leak, which occurs when a computer program incorrectly manages memory allocations in a way that memory that is no longer needed is not released. Or in other words, a memory leak is said to occur whenever inaccessible or unreferenced data exists in memory. 

So this lesson, is a reminder to never forget to teardown what was built if no longer needed on rerender, as to avoid errors as the interaction with the app continues. 