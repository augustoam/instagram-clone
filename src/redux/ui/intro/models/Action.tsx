import { ActionType } from "./ActionType";
import SliderIntroState from "./SliderIntroState";

export interface Action extends SliderIntroState {
    type: ActionType,
    payload: Payload,
}

export interface Payload {
    sliderIntroReducer: SliderIntroState
}