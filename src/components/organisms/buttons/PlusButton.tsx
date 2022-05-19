import React from 'react'
import { BLUE } from '@styles/colors'
import IconButton from '@components/IconButton'
import SvgIcon from '@assets/svg/SvgIcon'
import { View } from 'react-native'

interface Props {
  onPress: () => void
}

const PlusButton: React.FC<Props> = (props) => {

  return <View style={{ marginTop: 15 }}>
    <IconButton
      icon={SvgIcon.PLUS}
      iconColor={BLUE}
      onPress={props.onPress} />
  </View>
}

export default PlusButton