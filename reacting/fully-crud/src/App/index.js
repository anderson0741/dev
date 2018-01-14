import React from 'react';

import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Switch>
                <Route exact path="/" component={TodoList}></Route>
                <Route path="/todos/:id" component={TodoItem}></Route>
            </Switch>
            <footer>&copy;2018</footer>
        </div>
    )
}

export default App;