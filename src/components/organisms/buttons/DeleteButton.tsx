import React, { useContext } from 'react'
import RoundButton from '@components/RoundButton'
import { LocalizationContext } from '@contexts/Translations'
import { RED } from '@styles/colors'

interface Props {
  onPress: () => void
}

const DeleteButton: React.FC<Props> = (props) => {
  const { translations } = useContext(LocalizationContext)

  return <RoundButton
    backgroundStyle={{ borderWidth: 2, borderColor: RED, height: 30, marginTop: 14, minWidth: 0, width: 80 }}
    labelStyle={{ color: RED }}
    gradient={false}
    outline={true}
    onPress={props.onPress}
    label={translations('delete')}
  />
}

export default DeleteButton