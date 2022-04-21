While the useState hook accepts the initial state of the component (a number, a string, an array, an object), the useEffect hook accepts a function. This function is the effect, or the 'side effect'. 

An effect is just a sequence of one or more steps that you want the component to execute everytime the component renders. In comparison to the old lifecycle methods in hooks, the useEffect acts as a combination of componentDidMount, componentDidUpdate and componentWillUnmount. 


The useEffect runs its function right after:

1. right after the component mounts;
2. right after the component updates/rerenders;
3. just before it unmounts from the DOM. 

### the 'teardown'
The way useEffect enacts the componentWillUnmount, is by returning a function INSIDE the side effect function. Inside of that return function, is where the logic for tidying up lives.

###IMPORTANT NOTE: useEffect, first, runs the side effect function, right after render. However, on re-render, it first runs the return function (the clean up function), THEN runs again with the side effect function. So React cleans up effects from the previous render before running the effects again. 

In the class based react components, the render method, always runs first, and componentDidMount(), runs second, immediately after the component is rendered (And it only runs then, and that's the last time). Don't be confused by the visual order of methods in the code where componentDidMount is defined before the render method. 

###componentWillUnmount() {}
It's invoked just before a component is removed from the DOM. It's set up to reverse everything that has been set up in componentDidMount(). The state should never be called in componentWillUnmount, because the component is about to be removed. It's the appropriate place to tidy up, just before the component disappears from the DOM. 

### The useEffectHook()
