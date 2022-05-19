import { Action } from "./models/Action";
import { ActionType } from "./models/ActionType";
import SliderIntroState from "./models/SliderIntroState";

const initialState: SliderIntroState = {
    show: false
};

const sliderIntroReducer = (state: SliderIntroState = initialState, action: Action): SliderIntroState => {
    switch (action.type) {
        case ActionType.REHYDRATE:
            if (action.payload && action.payload.sliderIntroReducer) {
                return {
                    ...(action.payload.sliderIntroReducer ? action.payload.sliderIntroReducer : state)
                };
            } else {
                return { ...state };
            }
        case ActionType.SLIDER_INTRO: {
            return {
                ...state,
                show: action.show,
            }
        }
        default: {
            return { ...state };
        }
    }
};
export default sliderIntroReducer