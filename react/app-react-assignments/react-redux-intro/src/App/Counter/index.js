import React from 'react';
import { connect } from 'react-redux';
import { handleCount } from '../../redux/count';

function Counter(props) {
    let { count, handleCount } = props;
    let handleClick = (e) => {
        e.target.name ==="plus" ? handleCount(1) : handleCount(-1);
    }
    return (
        <div>
            {/* top is one way to do it, bottom is a different way using the function with e.target */}
            <button name="plus" onClick={()=>{handleCount(1)}}>+</button>
            <h1>Count: {count}</h1>
            <button name="minus" onClick={handleClick}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { count: state.count }
}

export default connect(mapStateToProps, { handleCount })(Counter);
