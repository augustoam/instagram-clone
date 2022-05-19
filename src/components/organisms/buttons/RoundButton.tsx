import React, { FC, forwardRef, useImperativeHandle, useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { SvgProps, SvgXml } from "react-native-svg"
import Dimens from "@styles/dimens"
import { MEDIUM_GRAY, ORANGE, PINK, PURPLE, TRANSPARENT, WHITE, YELLOW } from "@styles/colors"
import LinearGradient from "react-native-linear-gradient"
import CustomText from "@components/atoms/CustomText"
import Styles from "@styles/styles"

interface Props {
  backgroundStyle?: ViewStyle
  icon?: FC<SvgProps>
  disable?: boolean
  iconColor?: string
  iconSize?: number
  labelStyle?: TextStyle
  label?: string
  outline?: boolean
  gradient?: boolean
  testID?: string
  accessibilityLabel?: string
  onPress: () => void
}

export interface ButtonViewRef {
  setDisable: (disable: boolean) => void
}

const RoundButton = forwardRef<ButtonViewRef, Props>((props, ref) => {

  useImperativeHandle(ref, () => ({
    setDisable
  }))

  const [disable, setDisable] = useState(props.disable)

  return <TouchableOpacity
    testID={props.testID}
    accessibilityLabel={props.accessibilityLabel}
    delayPressIn={0}
    disabled={disable}
    onPress={props.onPress}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={props.gradient == false ? [TRANSPARENT, TRANSPARENT] : [YELLOW, ORANGE, PINK, PURPLE]}
      style={{
        marginTop: 10,
        height: 50,
        minWidth: '50%',
        opacity: disable ? 0.5 : 1,
        justifyContent: 'center',
        borderRadius: Dimens.TRIPLE_PADDING,
        backgroundColor: props.outline ? TRANSPARENT : WHITE,
        borderWidth: props.outline ? 2 : 0,
        borderColor: MEDIUM_GRAY,
        alignItems: 'center',
        ...props.backgroundStyle
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        {
          props.icon && <SvgXml
            style={{
              marginEnd: Dimens.DOUBLE_PADDING
            }}
            width={props.iconSize}
            fill={props.iconColor}
            height={props.iconSize}
            //@ts-ignore
            xml={props.icon} />
        }
        {
          props.label && <CustomText style={{
            ...Styles.Common.h4,
            color: WHITE,
            textAlign: 'center',
            ...props.labelStyle,
          }}>{props.label}</CustomText>
        }
      </View>
    </LinearGradient>
  </TouchableOpacity>
})

export default RoundButton