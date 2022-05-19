import React from "react"
import { SvgXml as SvgXmlNative } from "react-native-svg"
import Dimens from "@styles/dimens"
import { View } from 'react-native'
import { WHITE } from "@styles/colors"

// interface Props {
//     source: any,
//     width: string | number,
//     height: string | number,
//     color?: string
// }

// const originalWidth = 1000;
// const originalHeight = 300;
// const aspectRatio = originalWidth / originalHeight;

// const SvgXml: React.FC<Props> = (props) => {
//     return <View style={{ width: Dimens.WINDOW_WIDTH, aspectRatio }}>
//         <SvgXmlNative
//             fill={props.color || WHITE}
//             width="100%"
//             height="100%"
//             viewBox={`0 0 ${props.width} ${props.height}`}
//             xml={props.source} />
//     </View>
// }

// export default SvgXml

interface Props {
    source: any,
    width: number | string
    height: number | string
    color?: string
}

const SvgXml: React.FC<Props> = (props) => {
    return <SvgXmlNative
        fill={props.color || WHITE}
        width={props.width}
        height={props.height}
        xml={props.source} />
}

export default SvgXml