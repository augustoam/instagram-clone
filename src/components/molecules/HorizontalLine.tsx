import CustomText from '@components/atoms/CustomText'
import React from 'react'
import { View } from 'react-native'
import { GRAY } from '@styles/colors'
import Styles from '@styles/styles'

interface Props {
    label?: string
    numberOfLines?: number
    accessibilityLabel?: string
    bold?: boolean
    onPress?: () => void
}

const HorizontalLine: React.FC<Props> = (props) => {
    return <View style={{ flexDirection: 'row', alignItems: 'center', height: 50 }}>
        <View style={{ flex: 1, height: 0.4, backgroundColor: GRAY }} />
        <View>
            {props.label && <CustomText
                bold={true}
                textAlign={'center'}
                color={GRAY}
                style={{ width: 70, ...Styles.Common.h6 }}>
                {props.label.toUpperCase()}
            </CustomText>}
        </View>
        <View style={{ flex: 1, height: 0.4, backgroundColor: GRAY }} />
    </View>
}

export default HorizontalLine