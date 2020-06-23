import { configureStore, createSlice } from '@reduxjs/toolkit';

const initState = {
    newId: 0,
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
    initialState: initState,
    reducers: {
      addReward: (state, action) => {
        const x = action.payload.x;
        const y = action.payload.y;
  
        const newReward = {...state.rewards[y], id: state.newId}
        state.newId++;
  
        if (state.categories[x].rewards[y] === null) {
          state.categories[x].rewards[y] = newReward;
        }
      },
      deleteReward: (state, action) => {
        const x = action.payload.x;
        const y = action.payload.y;
  
        state.categories[x].rewards[y] = null;
      }
    }
  })
  
  export const { addReward, deleteReward } = categorizeSlice.actions;
  
  export default configureStore({
    reducer: categorizeSlice.reducer
  });