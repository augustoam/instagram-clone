import React from "react"
import { Image as Img } from 'native-base'

interface Props {
    source: any,
    aspectRatio?: number,
    width?: string | number,
    height?: string | number,
    alignSelf?: string,
    margin?: number
}

const Image: React.FC<Props> = (props) => {
    return <Img
        alt="logo"
        resizeMode={'contain'}
        style={{
            aspectRatio: 1,
            width: '100%',
            height: '28%',
            alignSelf: 'center'
        }}
        source={props.source} />
}

export default Image