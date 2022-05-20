import React from "react";
import LottieView from 'lottie-react-native';
import { Modal, Platform, View } from 'react-native';
import { connect } from "react-redux";

import { BlurView } from "@react-native-community/blur";
import { AppState } from "@redux/store";
import LOADING_ANIMATION from "@animation/loading_animation.json";
import { BLUR } from "@styles/colors";
import Dimens from "@styles/dimens";

interface Props {
    isLoading?: boolean
}

const AnimationView = () => <LottieView
    style={{
        flex: 1,
        position: "absolute",
        alignSelf: "center",
        width: 200,
        height: Dimens.WINDOW_HEIGHT
    }}
    source={LOADING_ANIMATION} autoPlay loop />

const LoaderIosView = (props: Props) => {
    return <>
        {
            props.isLoading && <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: "100%",
                    height: "100%",
                    alignContent: "center",
                    justifyContent: "center"
                }}>
                <BlurView
                    style={{ flex: 1 }}
                    blurType="dark"
                    blurAmount={10} />
                <AnimationView />
            </View>
        }
    </>
}

const LoaderAndroidView = (props: Props) => <Modal
    animationType="fade"
    statusBarTranslucent
    transparent
    visible={props.isLoading || false}>
    <View
        style={{
            flex: 1,
            backgroundColor: BLUR,
        }} />
    <AnimationView />
</Modal>

const LoaderView = (props: Props) => Platform.OS == 'ios' ? <LoaderIosView {...props} /> : <LoaderAndroidView {...props} />

const mapState = (state: AppState) => {
    const loaderState = state.loaderReducer
    return ({
        isLoading: loaderState.isLoading
    })
}

export default connect(mapState, null)(LoaderView);