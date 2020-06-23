import React from 'react';
import { connect } from 'react-redux';
import { saveState } from '../saveLoad';

const Save = state => {
    return (
        <div>
            <button onClick={() => saveState(state)}>Save</button>
        </div>
    )
}

const mapState = state => ({
    state: state.present
})

export default connect(mapState, null)(Save);