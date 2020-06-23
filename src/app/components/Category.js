import React from 'react';
import { connect } from 'react-redux';
import { addReward, deleteReward } from '../categorizeSlice';
import Reward from './Reward';

const Category = ({ x, name, rewards, addReward, deleteReward }) => {
    
    return (
        <div className='category'>
            <h2>{name}</h2>
            {rewards.map((reward, index) => {
                if (reward === null) {
                    return <div className='blank' key={index} onClick={() => addReward({x: x, y: index}) }></div>;
                } else {
                    return <Reward
                        key={index}
                        {...reward}
                        onClick={() => deleteReward({x: x, y: index})}
                        />;
                }
            })}
        </div>
    )
}

const mapState = (state, props) => ({
    rewards: state.categories[props.x].rewards,
    name: state.categories[props.x].name
});

const mapDispatch = { addReward, deleteReward }


export default connect(mapState, mapDispatch)(Category);