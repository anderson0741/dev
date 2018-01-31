import React, { Component } from 'react';


export default class Superhero extends Component {
    constructor(props){
        super(props);
        this.superhero = {
            ...props
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.superhero.displayCatchPhrase(this.superhero.catchphrase);
    }

    render() {
        return (
            <div onClick={this.handleClick} className='superhero-wrap'>
                <h1 className="name">{this.superhero.name}</h1>
                <img src={this.superhero.imgUrl} alt={`Photo of ${this.superhero.name}`} className="image"/>
            </div>
        )
    }
}
