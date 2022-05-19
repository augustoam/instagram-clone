import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import Styles from '@styles/styles'
import Dimens from '@styles/dimens'
import CustomText from '@components/atoms/CustomText'

interface Props {
    icon?: any
    iconColor?: string
    backgroudColor?: string
    label?: string
    description?: string
    onPress?: () => void
}

const CircleButton: React.FC<Props> = (props) => {
    return <TouchableOpacity
        onPress={props.onPress}>
        <View style={{ alignItems: 'center', padding: Dimens.PADDING }}>
            <View style={{
                padding: 18,
                marginBottom: 10,
                borderRadius: 50,
                backgroundColor: props.backgroudColor
            }}>
                <SvgXml
                    width={Dimens.MEDIUM_ICON_SIZE}
                    height={Dimens.MEDIUM_ICON_SIZE}
                    fill={props.iconColor}
                    xml={props.icon} />
            </View>
            {props.label && <CustomText style={{ ...Styles.Common.h4 }}>{props.label}</CustomText>}
            {props.description && <CustomText style={{ ...Styles.Common.h6 }}>{props.description}</CustomText>}
        </View>
    </TouchableOpacity>
}

export default CircleButton