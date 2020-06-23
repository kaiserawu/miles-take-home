import React from 'react';
import { connect } from 'react-redux';
import Reward from './Reward';

const RewardList = ({ rewards }) => {
    return (
        <div className='rewardlist'>
            <h2>Rewards</h2>
            {rewards.map(reward => (<Reward key={reward.name} name={reward.name} />))}
        </div>
    )
}

const mapState = state => ({
    rewards: state.rewards
});

export default connect(mapState, null)(RewardList);