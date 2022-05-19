import React from 'react'
import { Text, TextStyle } from 'react-native'
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD } from '@styles/typography'

interface Props {
  children: Element
  style?: TextStyle
  numberOfLines?: number
  accessibilityLabel?: string
  bold?: boolean
  textAlign?: string
  color?: string
  onPress?: () => void
}

const CustomText: React.FC<Props> = (props) => {
  return <Text
    accessibilityLabel={props.accessibilityLabel}
    numberOfLines={props.numberOfLines}
    onPress={props.onPress}
    style={{
      ...props.style,
      fontFamily: props.bold ? FONT_FAMILY_BOLD : FONT_FAMILY_REGULAR,
      textAlign: props.textAlign,
      color: props.color,
    }}>{props.children}</Text>
}

export default CustomText