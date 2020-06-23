import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const UndoRedo = ({ onUndo, canUndo, onRedo, canRedo }) => {
    return (
        <div>
            <button onClick={onUndo} disabled={!canUndo}>
            Undo
            </button>
            <button onClick={onRedo} disabled={!canRedo}>
            Redo
            </button>
        </div>
    )
}

const mapState = state => ({
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
})

const mapDispatch = dispatch => ({
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())
})

export default connect(mapState, mapDispatch)(UndoRedo);