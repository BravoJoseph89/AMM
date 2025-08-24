import { createSlice } from '@reduxjs/toolkit'

export const tokens = createSlice({
    name: 'tokens',
    initialState: {
        connection: [],
        symbols: [],
        balances: [0, 0]
    },
    reducers: {
        setContracts: (state, action) => {
            state.connection = action.payload
        },
        setSymbols: (state, action) => {
            state.symbols = action.payload
        },
        balancesLoaded: (state, action) => {
            state.balances = action.payload
        }
    }
})

export const { setContracts, setSymbols, balancesLoaded } = tokens.actions;

export default tokens.reducer;
