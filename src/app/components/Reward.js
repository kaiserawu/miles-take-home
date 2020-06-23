import React from 'react';

const Reward = ({ onClick, name, allowDelete }) => {
    return (
        <div className='reward'>
            {name}
            {allowDelete ? <button className='deleteReward' onClick={onClick}>x</button> : null}
        </div>
    )
}

export default Reward;