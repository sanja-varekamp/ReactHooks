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

### The useEffectHook() arguments in depth
The first argument of the hook is the function, which represents the 'effect'. That function can return a function, which will represent the 'teardown'. 

In order to control the behavior od useEffect, we can add a second argument to it, which is an empty array []. By adding the second argument, useEffect stops rerendering on every state change. So it only runs once, as it should after the initial render. After that, it holds the return teardown function, until it is ready to unmount. With an empty array as a second argument it essentially only mounts, and has no behavior in the middle which would normally get triggered by a rerender. It holds the teardown back. 

###How does the second argument work?

Using an empty array as a second argument, we effectively prevent the hook to rerender of every state change. However, we might want it to actually rerender on some state change (for example, we have 15 state variables, and we want to keep track of some of those). In that case, we put those state variables in the array, and only on change of that particular state, useEffect will rerender fully (together with the teardown).   

Having the empty array as a second argument, overrides the default behavior of the hook, to keep track of all of the state (variables), and to rerender every time. 

