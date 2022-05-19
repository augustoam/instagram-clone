import React, { FC, forwardRef, useImperativeHandle, useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { SvgProps, SvgXml } from "react-native-svg"
import Dimens from "@styles/dimens"
import { MEDIUM_GRAY, TRANSPARENT, WHITE } from "@styles/colors"
import CustomText from "@components/atoms/CustomText"
import Styles from "@styles/styles"
import { useTheme } from '@react-navigation/native';

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
  accessibilityLabel?: string
  onPress: () => void
}

export interface ButtonViewRef {
  setDisable: (disable: boolean) => void
}

const Button = forwardRef<ButtonViewRef, Props>((props, ref) => {
  const { colors } = useTheme();

  useImperativeHandle(ref, () => ({
    setDisable
  }))

  const [disable, setDisable] = useState(props.disable)

  return <TouchableOpacity
    accessibilityLabel={props.accessibilityLabel}
    delayPressIn={0}
    disabled={disable}
    onPress={props.onPress}>
    <View
      style={{
        marginTop: 10,
        height: 40,
        minWidth: '50%',
        opacity: disable ? 0.5 : 1,
        justifyContent: 'center',
        borderRadius: Dimens.HALF_PADDING,
        backgroundColor: props.outline ? TRANSPARENT : colors.primary,
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
          props.label && <CustomText
            bold={true}
            color={WHITE}
            textAlign={'center'}
            style={{
              ...Styles.Common.h5,
              ...props.labelStyle,
            }}
          >{props.label}</CustomText>
        }
      </View>
    </View>
  </TouchableOpacity>
})

export default Button