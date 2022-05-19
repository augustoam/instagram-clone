import { ActionType } from "./models/ActionType"

const setPushNotificationToken = (token: string) => ({
    type: ActionType.SET_PUSH_NOTIFICATION_TOKEN,
    token: token
})

export const onSetPushNotificationToken = (token: string) => (dispatch: any) => {
    dispatch(setPushNotificationToken(token))
}

export const onAddPushNotificationToken = () => (dispatch: any) => {
    // const appState: AppState = store.getState();
    // if (appState.pushNotificationReducer.token) {
    //     baseClient.mutate<AddPushNotificationTokenMutation>({
    //         mutation: AddPushNotificationTokenDocument,
    //         variables: {
    //             token: appState.pushNotificationReducer.token,
    //             appCode: MobileAppCodes,
    //             appName: DeviceInfo.getApplicationName(),
    //             appVersion: DeviceInfo.getVersion(),
    //             osType: Platform.OS == 'ios' ? OsTypes.IOs : OsTypes.Android,
    //             osVersion: DeviceInfo.getSystemVersion(),
    //             deviceModel: DeviceInfo.getDeviceId(),
    //             deviceUniqueId: DeviceInfo.getUniqueId(),
    //         }
    //     })
    // }
}

export const onDeletePushNotificationToken = () => (dispatch: any) => {
    // baseClient.mutate<DeletePushNotificationTokensMutation>({
    //     mutation: DeletePushNotificationTokensDocument,
    //     variables: {
    //         appCode: MobileAppCodes,
    //         deviceUniqueId: DeviceInfo.getUniqueId(),
    //     }
    // })
}

