import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {reducer as userDuck} from '../ducks/user.duck'

export const store = configureStore({
    reducer: { userDuck },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch);

