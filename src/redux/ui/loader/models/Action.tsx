import { ActionType } from "./ActionType";
import LoaderState from "./LoaderState";

export interface Action extends LoaderState {
    type: ActionType,
}