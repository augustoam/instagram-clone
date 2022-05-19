import { ActionType } from "./ActionType";
import AuthState from "./AuthState";

export interface Action extends AuthState {
    type: ActionType,
    payload: Payload,
}

export interface Payload {
    authReducer: AuthState
}