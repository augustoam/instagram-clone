import { Action } from "./models/Action";
import { ActionType } from "./models/ActionType";
import UserState from "./models/UserState";

const initialState: UserState = {
};

const userReducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
        case ActionType.REHYDRATE: {
            if (action.payload && action.payload.userReducer) {
                return {
                    ...(action.payload.userReducer.userProfile ? action.payload.userReducer : state)
                }
            } else {
                return { ...state }
            }
        }
        case ActionType.SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        default: {
            return { ...state };
        }
    }
};

export default userReducer