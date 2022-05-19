import React, { useContext } from 'react'
import { LocalizationContext } from '@contexts/Translations'
import Styles from '@styles/styles'
import CustomText from '@components/atoms/CustomText'
import { TouchableOpacity } from 'react-native'
import Dimens from '@styles/dimens'

interface Props {
  onPress: () => void
}

const ShowMoreButton: React.FC<Props> = (props) => {
  const { translations } = useContext(LocalizationContext)

  return <TouchableOpacity onPress={props.onPress} style={{ alignItems: 'center', padding: Dimens.PADDING }}>
    <CustomText style={{ ...Styles.Common.h5 }}>{translations('show.more')}</CustomText>
  </TouchableOpacity>
}

export default ShowMoreButton