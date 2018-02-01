import React from 'react';

function Bounty(props) {
    console.log('bounty-props', props);
    let {name, alive, type, reward} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h3>Alive: {alive}</h3>
            <h3>Reward: {reward}</h3>
            <h3>{type}</h3>
            <button>edit</button>
            <button>x</button>
        </div>
    )
}

export default Bounty
