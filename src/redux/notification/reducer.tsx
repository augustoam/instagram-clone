import { Action } from "./models/Action"
import { ActionType } from "./models/ActionType"
import PushNotificationState from "./models/PushNotificationState"

const initialState: PushNotificationState = {
    token: ''
}

const pushNotificationReducer = (state: PushNotificationState = initialState, action: Action): PushNotificationState => {
    switch (action.type) {
        case ActionType.REHYDRATE:
            if (action.payload && action.payload.pushNotificationReducer) {
                return {
                    ...(action.payload.pushNotificationReducer ? action.payload.pushNotificationReducer : state)
                };
            } else {
                return { ...state };
            }
        case ActionType.SET_PUSH_NOTIFICATION_TOKEN: {
            return {
                ...state,
                token: action.token,
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default pushNotificationReducer