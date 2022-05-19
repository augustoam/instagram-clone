import React from 'react'
import Dimens from '@styles/dimens'
import Styles from '@styles/styles'
import SvgIcon from '@assets/svg/SvgIcon'
import CustomText from '@components/atoms/CustomText'
import { BLUE } from '@styles/colors'
import { SvgXml } from 'react-native-svg'
import { TouchableOpacity, View } from 'react-native'

interface Props {
  label: string
  onPress?: () => void
}

const ScreenTitle: React.FC<Props> = (props) => {
  return <TouchableOpacity
    disabled={!props.onPress}
    onPress={props.onPress}
    style={{
      alignItems: 'center',
      flexDirection: 'row',
      padding: Dimens.DOUBLE_PADDING,
      height: 80
    }}>
    <CustomText style={{ ...Styles.Common.h2, paddingRight: 25 }} numberOfLines={1}>{props.label}</CustomText>
    {props.onPress && <View style={{ marginLeft: 'auto', justifyContent: 'center' }}>
      <SvgXml
        width={Dimens.SMALL_ICON_SIZE}
        height={Dimens.SMALL_ICON_SIZE}
        fill={BLUE}
        xml={SvgIcon.ARROW_RIGHT} />
    </View>}
  </TouchableOpacity>
}

export default ScreenTitle