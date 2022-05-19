import { Action } from "./models/Action";
import { ActionType } from "./models/ActionType";
import AuthState from "./models/AuthState";


const initialState: AuthState = {
    token: '',
    isBiometric: false,
    isAuthenticated: false
};

const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
    switch (action.type) {
        case ActionType.REHYDRATE:
            if (action.payload && action.payload.authReducer) {
                return {
                    ...(action.payload.authReducer ? action.payload.authReducer : state)
                };
            } else {
                return { ...state };
            }
        case ActionType.AUTHENTICATE_RESPONSE:
            return {
                ...state,
                token: action.token,
                refreshToken: action.refreshToken,
                expiration: action.expiration,
                updatedAt: action.updatedAt,
            };
        case ActionType.LOGOUT:
            return {
                token: '',
                isBiometric: state.isBiometric,
                isAuthenticated: false
            };
        case ActionType.SET_BIOMETRIC:
            return {
                ...state,
                isBiometric: action.isBiometric
            };
        case ActionType.IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
        default:
            return state;
    }
};

export default authReducer;
