While the useState hook accepts the initial state of the component (a number, a string, an array, an object), the useEffect hook accepts a function. This function is the effect, or the 'side effect'. 

An effect is just a sequence of one or more steps that you want the component to execute everytime the component renders. In comparison to the old lifecycle methods in hooks, the useEffect acts as a combination of componentDidMount, componentDidUpdate and componentWillUnmount. 


The useEffect runs its function right after:

1. right after the component mounts;
2. right after the component updates/rerenders;
3. just before it unmounts from the DOM. 

