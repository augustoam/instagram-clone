import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import Styles from '@styles/styles'
import Dimens from '@styles/dimens'

interface Props {
    label: string
    dataText?: string
    style?: ViewStyle
}

const DataText: React.FC<Props> = (props) => {
    return <View style={{
        paddingTop: Dimens.PADDING,
        paddingBottom: Dimens.PADDING,
        ...props.style
    }}>
        <Text style={{ ...Styles.Common.h3 }}>{props.label}</Text>
        {props.dataText != undefined && <Text style={{ ...Styles.Common.p }}>{props.dataText}</Text>}
    </View>
}

export default DataText