import React from 'react';
import { connect } from 'react-redux';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const Reward = ({ onClick, name, allowDelete, x, y }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.REWARD, prevX: x, y: y },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div className='reward' ref={drag} style={{opacity: isDragging ? .5 : 1}}>
            {name}
            {allowDelete ? <button className='deleteReward' onClick={onClick}>x</button> : null}
        </div>
    )
}

const mapState = (state, props) => ({
    y: state.present.rewards.map(e => ( e.name )).indexOf(props.name)
})

export default connect(mapState, null)(Reward);