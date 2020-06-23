import React from 'react';

const Reward = ({ onClick, name }) => {
    return (
        <div onClick={onClick} className='reward'>
            {name}
        </div>
    )
}

export default Reward;