import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import SvgXml from '@components/atoms/SvgXml'

interface Props {
    icon: string
    color: string
    accessibilityLabel?: string
    onPress?: () => void
}

const IconDataInput: React.FC<Props> = (props) => {
    return <TouchableOpacity
        accessibilityLabel={props.accessibilityLabel}
        delayPressIn={0}
        onPress={props.onPress}>
        <View
            style={{
                height: "50%",
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <SvgXml width={"100%"} height={"100%"} source={props.icon} color={props.color} />
        </View>
    </TouchableOpacity>
}

export default IconDataInput