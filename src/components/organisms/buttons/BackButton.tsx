import React, { useContext } from 'react'
import SvgIcon from '@assets/svg/SvgIcon'
import { BLUE } from '@styles/colors'
import CustomText from '@components/atoms/CustomText'
import Styles from '@styles/styles'
import Dimens from '@styles/dimens'
import { TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { LocalizationContext } from '@contexts/Translations'

interface Props {
  onPress: () => void
}

const BackButton: React.FC<Props> = (props) => {
  const { translations } = useContext(LocalizationContext)

  return <TouchableOpacity onPress={props.onPress} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
    <SvgXml
      width={Dimens.SMALL_ICON_SIZE}
      height={Dimens.SMALL_ICON_SIZE}
      fill={BLUE}
      xml={SvgIcon.BACK} />

    <CustomText style={{ ...Styles.Common.h5, marginLeft: Dimens.PADDING, fontWeight: 'bold', color: BLUE }}>{translations('back')}</CustomText>
  </TouchableOpacity>
}

export default BackButton