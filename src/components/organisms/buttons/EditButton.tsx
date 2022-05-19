import React, { useContext } from 'react'
import RoundButton from '@components/RoundButton'
import { LocalizationContext } from '@contexts/Translations'
import { GRAY } from '@styles/colors'
import Styles from '@styles/styles'

interface Props {
  onPress: () => void
}

const EditButton: React.FC<Props> = (props) => {
  const { translations } = useContext(LocalizationContext)

  return <RoundButton
    backgroundStyle={{ borderWidth: 0, height: 30, minWidth: 0, width: 100, marginTop: 15, alignItems: 'flex-end' }}
    labelStyle={{ fontWeight: 'normal', ...Styles.Common.p, color: GRAY, }}
    gradient={false}
    outline={true}
    onPress={props.onPress}
    label={translations('edit')}
  />
}

export default EditButton