import React from 'react';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import { addReward, deleteReward, moveReward } from '../store';
import Reward from './Reward';

const Category = ({ x, name, rewards, addReward, deleteReward, moveReward }) => {
    const [, drop] = useDrop({
        accept: ItemTypes.REWARD,
        drop: (item) => {
            if (item.prevX !== undefined) {
                moveReward({x: x, prevX: item.prevX, y: item.y})
            } else {
                addReward({x: x, y: item.y})
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })
    
    return (
        <div className='category' ref={drop} >
            <h2>{name}</h2>
            {rewards.map((reward, index) => {
                if (reward === null) {
                    return <div className='blank' key={index} ></div>;
                } else {
                    return <Reward
                        key={index}
                        x={x}
                        {...reward}
                        allowDelete={true}
                        onClick={() => deleteReward({x: x, y: index})}
                    />;
                }
            })}
        </div>
    )
}

const mapState = (state, props) => ({
    rewards: state.present.categories[props.x].rewards,
    name: state.present.categories[props.x].name
});

const mapDispatch = { addReward, deleteReward, moveReward };


export default connect(mapState, mapDispatch)(Category);