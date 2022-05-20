import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import BackButton from '@components/organisms/buttons/BackButton'
import { WHITE } from '@styles/colors'
import { useNavigation } from '@react-navigation/core'

const MainNavigator = () => {
    const Stack = createNativeStackNavigator()

    const navigation = useNavigation()

    return <Stack.Navigator
        screenOptions={{
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
            headerStyle: { backgroundColor: WHITE },
            headerTintColor: WHITE,
            headerTitle: ''
        }}
        initialRouteName={"TabNavigator"}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
}

export default MainNavigator
