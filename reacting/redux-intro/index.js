const redux = require("redux");

function count(prevCount = 0, action) {
    switch (action.type) {
        case "CHANGE":
            return action.amount + prevCount;
        default:
            return prevCount;
    }
}
function change(num) {
    return {
        type: "CHANGE",
        amount: num
    }
}

function names(prevNames = [], action) {
    switch (action.type) {
        case "ADD_NAME":
            return [...prevNames, action.name]
        default:
            return prevNames;
    }
}
function addName(name){
    return {
        type: "ADD_NAME",
        name
    }
}

let store = redux.createStore(redux.combineReducers({ count, names }));

store.subscribe(() => {
    console.log(store.getState());

});


store.dispatch(change(10));
store.dispatch(change(10));
store.dispatch(change(10));
store.dispatch(change(10));
store.dispatch(change(10));
store.dispatch(addName("Juan Carlos"));


// console.log(store.getState());
