import {createSlice} from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getIdentifierData = createAsyncThunk('getIdentifier', async(search) => {
    const response = await fetch(`http://localhost:4001/searchmenu?identifier=${search}`).then((data) => {
        return data.json();
    })
    return response;
})

const identifierReducer = createSlice({
    name: 'kfc',
    initialState: {
        menu: [],
        loading: false
    },
    reducer: {},
    extraReducers:{
        [getIdentifierData.pending]: (state, action) => {
            state.loading = true;
        },
        [getIdentifierData.fulfilled]: (state, action) => {
            state.menu = (action.payload.data);
            state.loading = false;
        },
        [getIdentifierData.rejected]: (state, action) => {
            console.log('full', state, action);
        }
    }
});

const IdentifierReducer = identifierReducer.reducer;

export default IdentifierReducer;
