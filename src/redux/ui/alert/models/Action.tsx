import { ActionTypes } from "./ActionTypes";
import AlertState from "./AlertState";

export interface Action extends AlertState {
    type: ActionTypes,
}