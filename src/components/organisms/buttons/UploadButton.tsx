import React, { useContext } from 'react'
import RoundButton from '@components/RoundButton'
import { LocalizationContext } from '@contexts/Translations'
import { BLUE, LIGHT_GRAY, TRANSPARENT } from '@styles/colors'

interface Props {
  onPress: () => void
}

const UploadButton: React.FC<Props> = (props) => {
  const { translations } = useContext(LocalizationContext)

  return <RoundButton
    backgroundStyle={{ borderWidth: 2, borderColor: TRANSPARENT, backgroundColor: LIGHT_GRAY, height: 30, marginTop: 14, minWidth: 0, width: 80 }}
    labelStyle={{ color: BLUE }}
    gradient={false}
    outline={true}
    onPress={props.onPress}
    label={translations('upload')}
  />
}

export default UploadButton