import {createSlice} from '@reduxjs/toolkit';


export type User = {
    id: string
    email: string
    first_name: string
    last_name: string
}

interface InitialState {
    isAuthorized: boolean
    user: User | null
}

const initialState: InitialState = {
    isAuthorized: false,
    user: null
};

export const {actions, reducer} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn:(state,
               // {payload}: PayloadAction<User>
        ) => {
            // state.user = payload
            state.isAuthorized = true
        },
        logOut: (state) => {
            state.user = null
            state.isAuthorized = false
            localStorage.removeItem('FAKEDETECTOR_token')
        }
    },
});