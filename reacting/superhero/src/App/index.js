import React, { Component } from "react";
import superheros from "./superheros.json";
import SuperHero from "./SuperHero";

class App extends Component {
    constructor(props) {
        super(props);
        this.displayCatchPhrase = this.displayCatchPhrase.bind(this);
    }
    displayCatchPhrase(str) {
        alert(str);
    }

    render() {
        // let { superheros } = this.state;
        return (
            <div>
                {superheros.map((superhero, index) => {
                    return (
                        <SuperHero displayCatchPhrase={this.displayCatchPhrase} {...superhero} key={index} />
                    )
                })}
            </div>
        )
    }
}

export default App;