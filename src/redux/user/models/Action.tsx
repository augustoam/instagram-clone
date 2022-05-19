import { ActionType } from "./ActionType";
import UserState from "./UserState";

export interface Action extends UserState {
    type: ActionType,
    payload: Payload,
}
export interface Payload {
    userReducer: UserState
}