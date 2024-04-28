import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';
import {useAppDispatch} from './reduxHooks';
import {actions as mainActions} from '../ducks/main.duck';
import {actions as userActions} from '../ducks/user.duck';

const rootActions = {
    ...mainActions,
    ...userActions,
};
export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};