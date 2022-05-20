import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import MainScreen from '@scenes/main/MainScreen'
import Dimens from '@styles/dimens'
import { BLUE, GRAY, TRANSPARENT } from '@styles/colors'
import SvgIcon from '@assets/svg/SvgIcon'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'

const TabNavigator = () => {
  const insets = useSafeAreaInsets()
  const Tab = createBottomTabNavigator()

  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        let iconSize = Dimens.MEDIUM_ICON_SIZE

        switch (route.name) {
          case "Home":
            iconName = SvgIcon.HOME
            break
          case "Rooms":
            iconName = SvgIcon.HOME
            iconSize = Dimens.SMALL_ICON_SIZE
            break
          case "Settings":
            iconName = SvgIcon.SETTINGS
            iconSize = Dimens.MEDIUM_ICON_SIZE + 4
            break
          default:
            break
        }

        // You can return any component that you like here!
        // return <FontAwesome name={iconName} size={size} color={color} />
        return <SvgXml
          width={iconSize}
          height={iconSize}
          fill={color}
          xml={iconName} />
      },
      tabBarLabelPosition: "below-icon",
      tabBarInactiveTintColor: GRAY,
      tabBarActiveTintColor: BLUE
    })}

  // tabBarOptions={{
  //   style: { height: Platform.OS === 'ios' ? Dimens.WINDOW_HEIGHT / 8 : 63, borderTopColor: TRANSPARENT, paddingBottom: insets.bottom, backgroundColor: '#efefef' },
  //   labelStyle: { fontSize: 12, margin: 5, fontWeight: 'bold' },
  //   tabStyle: { paddingTop: 10 },
  //   labelPosition: "below-icon",
  //   activeTintColor: BLUE,
  //   inactiveTintColor: GRAY,
  // }}
  >
    <Tab.Screen name="Home" component={MainScreen} />
  </Tab.Navigator>
}

export default TabNavigator
