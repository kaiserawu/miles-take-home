const saveLoad = {
    loadState: (initialState) => {
        try {
            const savedState = localStorage.getItem('state');
            if (savedState === null) {
            return initialState;
            }
            return JSON.parse(savedState).state;
        } catch (err) {
            return undefined;
        }
    },
    saveState: state => {
        try {
          const savedState = JSON.stringify(state);
          localStorage.setItem('state', savedState);
        } catch {
          return;
        }
    }
}

export const { loadState, saveState } = saveLoad;