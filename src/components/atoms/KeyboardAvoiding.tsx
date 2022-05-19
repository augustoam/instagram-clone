import React from "react"
import { WHITE } from "@styles/colors"
import { KeyboardAvoidingView, Platform } from 'react-native'
import Dimens from "@styles/dimens"

interface Props {
    children: Element,
}

const KeyboardAvoiding: React.FC<Props> = (props) => {
    return <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
            flex: 1,
            justifyContent: 'center',
            padding: Dimens.TRIPLE_PADDING,
            backgroundColor: WHITE
        }}>
        {props.children}
    </KeyboardAvoidingView>
}

export default KeyboardAvoiding