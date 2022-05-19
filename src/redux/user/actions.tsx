import { store } from "@redux/store"
import { ActionType } from "./models/ActionType"
import { setBiometric } from '@redux/authentication/actions'

const setUserProfile = (userProfile: any) => ({
    type: ActionType.SET_USER_PROFILE,
    userProfile: userProfile
})

export const onUserProfile = (userProfile: any) => (dispatch: any) => {
    const currentUserProfile = store.getState().userReducer?.userProfile
    if (!currentUserProfile || currentUserProfile?.id != userProfile.id) {
        dispatch(setBiometric(false))
    }
    dispatch(setUserProfile(userProfile))
}
