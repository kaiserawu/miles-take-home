import { configureStore, createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import { loadState } from './saveLoad';


const initState = {
  categories: [
    { name: 1, rewards: [null, null, null, null, null] },
    { name: 2, rewards: [null, null, null, null, null] },
    { name: 3, rewards: [null, null, null, null, null] },
    { name: 4, rewards: [null, null, null, null, null] },
    { name: 5, rewards: [null, null, null, null, null] }
  ],
  rewards: [{name: 'R1'}, {name: 'R2'}, {name: 'R3'}, {name: 'R4'}, {name: 'R5'}]
}

const categorizeSlice = createSlice({
  name: 'categorizeRewards',
  initialState: loadState(initState),
  reducers: {
    addReward: (state, action) => {
      const x = action.payload.x;
      const y = action.payload.y;

      const newReward = {...state.rewards[y]};

      if (state.categories[x].rewards[y] === null) {
        state.categories[x].rewards[y] = newReward;
      }
    },
    deleteReward: (state, action) => {
      const x = action.payload.x;
      const y = action.payload.y;

      state.categories[x].rewards[y] = null;
    },
    moveReward: (state, action) => {
      const newX = action.payload.x;
      const prevX = action.payload.prevX;
      const y = action.payload.y;

      const newReward = {...state.rewards[y]};
      state.categories[newX].rewards[y] = newReward;
      state.categories[prevX].rewards[y] = null;
    },
    testReducer: state => {
      console.log('testing new reducer');
    }
  }
})

export const { addReward, deleteReward, moveReward, testReducer } = categorizeSlice.actions;

export default configureStore({
  reducer: undoable(categorizeSlice.reducer)
});
