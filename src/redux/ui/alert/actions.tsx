import { ActionTypes } from "./models/ActionTypes";

const message = (message: string) => ({
    type: ActionTypes.ERROR,
    message: message
})

const reset = () => ({
    type: ActionTypes.RESET,
    message: "",
    controller: null
})

export const onMessage = (msg: any) => (dispatch: any) => {
    dispatch(message(msg.toString()));
}

export const onReset = () => (dispatch: any) => {
    dispatch(reset());
}