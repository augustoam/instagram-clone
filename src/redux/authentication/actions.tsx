import { onMessage } from "../ui/alert/actions"
import { ActionType } from "./models/ActionType"
import { onLoadingStatusChanged } from "@redux/ui/loader/actions"
import { DateTime } from "luxon"
import { AuthenticationResponse } from "models/authentication"
import { onAddPushNotificationToken } from "@redux/notification/actions"
import { onUserProfile } from "@redux/user/actions"

const loggingOut = () => ({
    type: ActionType.LOGOUT
})

export const onIsAuthenticated = (authenticated: boolean) => (dispatch: any) => {
    dispatch({
        type: ActionType.IS_AUTHENTICATED,
        isAuthenticated: authenticated
    })
}

export const onLogin = (data: AuthenticationResponse) => (dispatch: any) => dispatch(onLoginResponse(data))

export const onLoginResponse = (data: AuthenticationResponse) => ({
    type: ActionType.AUTHENTICATE_RESPONSE,
    token: data.accessToken,
    refreshToken: data.refreshToken,
    expiration: DateTime.local().plus({ seconds: data.accessTokenExpiresInSeconds }).toISO(),
    updatedAt: DateTime.local().toISO()
})

const onBiometric = (isBiometric: boolean) => ({
    type: ActionType.SET_BIOMETRIC,
    isBiometric: isBiometric
})

const onCompleteLogin = (user: any) => (dispatch: any) => {
    //dispatch(onAddPushNotificationToken())
    dispatch(onUserProfile(user))
    dispatch(onIsAuthenticated(true))
}

const onErrorLogin = (errorCode: string) => (dispatch: any) => {
    dispatch(onMessage(errorCode))
    dispatch(logout())
}

export const login = (email: string, password: string) => (dispatch: any) => {
    const auth: AuthenticationResponse = {
        accessToken: "",
        refreshToken: "",
        accessTokenExpiresInSeconds: 10000
    }

    const user = {
        id: "123",
        name: "Firstname",
        lastName: "Name",
        email: "test@test.com",
        gender: "male",
        phoneNumber: "+",
        confirmedAt: "2022-04-14T07:17:00.131Z",
        createdAt: "2022-04-14T07:17:00.131Z",
        updatedAt: "2022-04-14T07:17:00.131Z",
        lastAccess: "2022-04-14T07:17:00.131Z"
    }

    try {
        dispatch(onLogin(auth))
        dispatch(onCompleteLogin(user))
    } catch (error) {
        dispatch(onErrorLogin('error.forbidden'))
    } finally {
        dispatch(onLoadingStatusChanged(false))
    }
}

export const setBiometric = (isBiometric: boolean) => (dispatch: any) => {
    dispatch(onBiometric(isBiometric))
}

export const logout = () => (dispatch: any) => {
    dispatch(loggingOut())
    dispatch(onLoadingStatusChanged(false))
}