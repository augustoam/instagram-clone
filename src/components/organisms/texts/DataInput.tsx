import React from 'react'
import { KeyboardTypeOptions, Text, View, ViewStyle } from 'react-native'
import Styles from '@styles/styles'
import Dimens from '@styles/dimens'
import { Input } from 'native-base'
import { BLACK, GRAY, LIGHT_GRAY } from '@styles/colors'

interface Props {
    value?: string
    label?: string
    placeholder?: string
    disabled?: boolean
    secureTextEntry?: boolean
    style?: ViewStyle
    keyboardType?: KeyboardTypeOptions
    accessibilityLabel?: string
    rightElement?: JSX.Element
    onChangeText?: (value: string) => void
}

const DataInput: React.FC<Props> = (props) => {
    return <View style={{
        paddingTop: Dimens.PADDING,
        paddingBottom: Dimens.PADDING,
        ...props.style
    }}>
        {props.label && <Text style={{
            ...Styles.Common.h3,
            paddingBottom: Dimens.HALF_PADDING,
            paddingLeft: Dimens.PADDING,
        }}>{props.label}</Text>}
        <Input
            borderWidth={0.2}
            borderColor={GRAY}
            height={35}
            backgroundColor={LIGHT_GRAY}
            color={props.disabled ? GRAY : BLACK}
            accessibilityLabel={props.accessibilityLabel}
            disabled={props.disabled}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            rightElement={props.rightElement}
        />
    </View>
}

export default DataInput