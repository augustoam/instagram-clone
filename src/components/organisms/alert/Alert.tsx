import { AppState } from "@redux/store";
import { onReset } from "@redux/ui/alert/actions";
import React, { useContext } from "react";
import { Animated, Text } from "react-native";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { BLUR, WHITE } from "@styles/colors";
import Dimens from "@styles/dimens";
import Styles from "@styles/styles";
import { LocalizationContext } from '@contexts/Translations';

interface Props {
    message?: string
    reset: () => void
}

const fade = new Animated.Value(1);
const animation = Animated.timing(
    fade,
    {
        toValue: 0,
        delay: 2000,
        duration: 200,
        useNativeDriver: true
    }
);

const Alert = (props: Props) => {
    const { translations } = useContext(LocalizationContext)

    if (!props.message || props.message === "") {
        return null
    }
    animation.start((callback) => {
        if (callback.finished) {
            props.reset()
        }
    });
    return <Animated.View
        style={{
            ...Styles.Common.boxShadow,
            alignItems: 'flex-end',
            marginTop: Dimens.DOUBLE_PADDING,
            padding: Dimens.DOUBLE_PADDING,
            borderRadius: Dimens.DOUBLE_PADDING,
            backgroundColor: BLUR,
            zIndex: 1,
            position: 'absolute',
            top: Dimens.DOUBLE_PADDING,
            alignSelf: 'center',
            width: "90%",
            opacity: fade
        }}>
        <Text style={{
            color: WHITE,
            alignSelf: 'center'
        }}
        >{translations(props.message)}</Text>
    </Animated.View>
}

const mapState = (state: AppState) => {
    const controllerState = state.alertReducer
    return ({
        message: controllerState.message
    })
}

const mapDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    reset: () => dispatch(onReset())
});

export default connect(mapState, mapDispatch)(Alert);