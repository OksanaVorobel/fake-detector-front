import {createSlice} from '@reduxjs/toolkit';
import storage from "../lib/storage";


interface InitialState {
    isAuthorized: boolean
}

const initialState: InitialState = {
    isAuthorized: !!storage.getToken(),
};

export const {actions, reducer} = createSlice({
    name: 'user',
    initialState,
    reducers: {
       logIn:(state) => {
            state.isAuthorized = true;
        },
        logOut: (state) => {
            state.isAuthorized = false;
            storage.clearToken();
        }
    },
});