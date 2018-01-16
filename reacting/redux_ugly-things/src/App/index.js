import React from 'react';
import Form from '../shared/Form';
import Recipes from './Recipes';

function App() {
    return (
        <div>
            <Form add clear></Form>
            <Recipes />
        </div>
    )
}

export default App;
