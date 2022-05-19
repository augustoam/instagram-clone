import { Action } from "./models/Action";
import { ActionType } from "./models/ActionType";
import LoaderState from "./models/LoaderState";

const initialState: LoaderState = {
    isLoading: false
};

const loaderReducer = (state: LoaderState = initialState, action: Action): LoaderState => {
    switch (action.type) {
        case ActionType.IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        default: {
            return { ...state };
        }
    }
};
export default loaderReducer