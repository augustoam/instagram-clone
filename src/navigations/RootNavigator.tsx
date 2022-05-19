import React from 'react';
import LoginScreen from '@scenes/auth/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootNavigator = () => {

    const Stack = createNativeStackNavigator();

    return <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Auth"}>
        <Stack.Screen name="Auth" component={LoginScreen} />

    </Stack.Navigator>;
};

export default RootNavigator;
