import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';
import {useAppDispatch} from './reduxHooks';
import {actions as userActions} from '../ducks/user.duck';

const rootActions = {
    ...userActions,
};
export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};