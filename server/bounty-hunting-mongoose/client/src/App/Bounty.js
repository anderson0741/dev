import React from 'react';
import './Bounty.css';
import Form from './Form';


function Bounty(props) {
    console.log('bounty-props', props);
    let { name, alive, type, reward, bountyDelete, _id, id } = props;
    return (
        <div className='who'>
            <button className='button' onClick={() => { bountyDelete(_id) }}>x</button>
            <h2>{name}</h2>
            <h3>Living: {alive}</h3>
            <h3>Reward: ${reward}</h3>
            <h3>{type}</h3>
            <button>edit</button>
            <br />
        </div>
    )
}

export default Bounty;
