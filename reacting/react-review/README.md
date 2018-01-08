The 5 principles
1) Declarative - we have to tell react what to do
2) State-based - 
    state: the current mutable data set of the app
    handling state-changes: provide a new state, and compare with old state, and render changes
3) Mono-flow -
    cyclical data flow (only flows in one direction)
    state --> view --> trigger state-changes --> new state --> view --> trigger state-changes ongoing loop
4) component-based (feature-based) - broken up into smaller parts and perform individual tasks
5) Virtual DOM
    - virtual DOM is a javascript object representing real DOM.
    - as view triggers changes in the state, the virtual dom is updated, then compared with real DOM, and view is therefor updated containing new changes

purposes of a web page:
1) display data
2) manipulate data




