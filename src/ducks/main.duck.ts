import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
    isDrawerCollapsed: boolean
}

const initialState: InitialState = {
    isDrawerCollapsed: false
};

export const {actions, reducer} = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setDrawerState: (state, {payload}: PayloadAction<boolean>) => {
            state.isDrawerCollapsed = payload
        }
    },
});