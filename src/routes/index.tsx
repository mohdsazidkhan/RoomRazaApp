import React, { useEffect, useState } from 'react'
import { useAuth } from '../routes/context/Auth';
import DashboardRoute from './dashboardRoute';
import AuthRoot from './authRoute';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';

const Routes = () => {
    const { authData, loading } = useAuth();
    useEffect(() => {
        console.log("authData", authData);
    }, []);

    return (
        <Provider store={store}>
            {loading ? <ActivityIndicator style={{ flex: 1 }} size={'large'} /> : authData ? <DashboardRoute /> : <AuthRoot />}
        </Provider>
    )
}
export default Routes;