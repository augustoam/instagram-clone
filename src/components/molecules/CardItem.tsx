import React from 'react'
import Dimens from '@styles/dimens'
import Styles from '@styles/styles'
import SvgIcon from '@assets/svg/SvgIcon'
import { SvgXml } from 'react-native-svg'
import { BLUE, WHITE } from '@styles/colors'
import { TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
  right?: any
  left?: any
  cardStyle?: ViewStyle
  arrow?: boolean
  content: any
  disabled?: boolean
  onPress: () => void
}

const CardItem: React.FC<Props> = (props) => {
  const arrow = <SvgXml
    width={Dimens.SMALL_ICON_SIZE}
    height={Dimens.SMALL_ICON_SIZE}
    fill={BLUE}
    xml={SvgIcon.ARROW_RIGHT} />

  return <TouchableOpacity
    activeOpacity={0.8}
    disabled={props.disabled || false}
    onPress={props.onPress}>
    <View style={{
      margin: 5,
      backgroundColor: WHITE,
      borderRadius: 8,
      ...Styles.Common.boxShadow,
      ...props.cardStyle
    }}>
      <View style={{ flex: 1, flexDirection: 'row', padding: Dimens.PADDING, paddingLeft: 15 }}>
        {props.left && <View style={{ justifyContent: 'center' }}>
          {props.left}
        </View>}
        <View style={{ justifyContent: 'center' }}>
          {props.content}
        </View>
        {props.right || props.arrow && <View style={{ marginLeft: 'auto', justifyContent: 'center' }}>
          {props.right}
          {arrow}
        </View>}
      </View>

    </View>
  </TouchableOpacity>
}

export default CardItem