### How context works in class based React components

Context is a feature introduced to React to solve a specific problem which is passing data down from a top of a component tree down to a nested component further down that tree (without passing it as a props through every single component that doesn't need it down the way). 

Context acts like a bridge that connects the 2 components that are going to share the data. The component that provides the data is called a provider and the component or components that receive the data is called a consumer. 

### Why useContext hook?

Because it's a solution to what was known as 'context callback hell', which was a result of working with multiple pieces of context at the same time and needing to write and nest callback functions for each of them (class based example of that in video #20). The useContext() is supposed to be syntax friendly and lightweight compared to the old approach. 

### Implementation 

It has a clean implementation where the provider component wraps the next in the tree component and passes the value. The receiving component (regardless how far further down) receives it via the hook, and it's ready for usage. 

An app can contain as many context hooks as it needs; they can all be stored in different variables. 

