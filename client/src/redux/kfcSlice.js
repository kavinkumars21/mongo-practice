import {createSlice} from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getKfcData = createAsyncThunk('getMenu', () => {
    const response = fetch('http://localhost:4001/menulist').then((data) => {
        return data.json();
    })
    return response;
})


const kfcReducer = createSlice({
    name: 'kfc',
    initialState: {
        menu: [],
        loading: false
    },
    reducer: {},
    extraReducers:{
        [getKfcData.pending]: (state, action) => {
            state.loading = true;
        },
        [getKfcData.fulfilled]: (state, action) => {
            state.menu = action.payload.data;
            state.loading = false;
        },
        [getKfcData.rejected]: (state, action) => {
            console.log('full', state, action);
        }
    }
});

const KFCReducer = kfcReducer.reducer;

export default KFCReducer;
