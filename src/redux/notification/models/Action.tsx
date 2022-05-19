import { ActionType } from "./ActionType";
import PushNotificationState from "./PushNotificationState";

export interface Action extends PushNotificationState {
    type: ActionType,
    payload: Payload,
}

export interface Payload {
    pushNotificationReducer: PushNotificationState
}