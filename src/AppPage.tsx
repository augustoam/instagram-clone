import React from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import RootNavigator from '@navigations/RootNavigator'
import { Box, NativeBaseProvider } from 'native-base'

interface Props {
  showSliderIntro: boolean
  token?: string
  onSetPushNotificationToken: (token: string) => void
}

const AppPage: React.FC<Props> = (props) => {
  const scheme = useColorScheme();

  return <NativeBaseProvider>
    <Box flex={1}>
      <SafeAreaProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Box>
  </NativeBaseProvider>
}

export default AppPage