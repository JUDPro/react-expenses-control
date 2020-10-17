import {createSlice, configureStore} from '@reduxjs/toolkit';

export const buyingsSplice = createSlice({

    name: 'buyings',
    initialState: {
        buyings: []
    },

    reducers: {
        save: (state, action) => {
            state.buyings = [...state.buyings, action.payload]
        },
        delete: (state, action) => {
            state.buyings.splice(action.payload, 1);
            state.buyings = [...state.buyings]
        },
    }
})

const store = configureStore({
    reducer: {
        buyings: buyingsSplice.reducer
    }
})

export default store;
export const actions = buyingsSplice.action;
