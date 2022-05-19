import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { WHITE } from "@styles/colors"

interface Props {
    children: Element
    paddingTop?: number
}

const SafeArea: React.FC<Props> = (props) => {
    return <SafeAreaView style={{ flex: 1, paddingTop: props.paddingTop ? props.paddingTop : -30, backgroundColor: WHITE }}>
        {props.children}
    </SafeAreaView>
}

export default SafeArea