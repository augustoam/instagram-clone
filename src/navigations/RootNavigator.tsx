import React from 'react';
import LoginScreen from '@scenes/auth/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import { useSelector } from 'react-redux';
import { AppState } from '@redux/store';

const RootNavigator = () => {

    const Stack = createNativeStackNavigator();

    const isAuthenticated = useSelector((state: AppState) => state.authReducer.isAuthenticated);


    return <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={isAuthenticated ? "Main" : "Auth"}>
        <Stack.Screen name="Auth" component={LoginScreen} />
        <Stack.Screen name={"Main"} component={MainNavigator} />

    </Stack.Navigator>;
};

export default RootNavigator;
