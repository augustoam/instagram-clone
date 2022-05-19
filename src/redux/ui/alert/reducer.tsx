import { Action } from "./models/Action";
import { ActionTypes } from "./models/ActionTypes";
import AlertState from "./models/AlertState";

const initialState: AlertState = {
    message: ""
};

const alertReducer = (state: AlertState = initialState, action: Action): AlertState => {
    switch (action.type) {
        case ActionTypes.ERROR: {
            return {
                ...state,
                message: action.message,
            }
        }
        case ActionTypes.RESET: {
            return {
                ...state,
                message: action.message
            }
        }
        default: {
            return { ...state };
        }
    }
};

export default alertReducer