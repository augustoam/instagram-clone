import { ActionType } from "./models/ActionType";

const onLoadingStatus = (isLoading: boolean) => ({
    type: ActionType.IS_LOADING,
    isLoading: isLoading
});


export const onLoadingStatusChanged = (isLoading: boolean) => (dispatch: any) => {
    dispatch(onLoadingStatus(isLoading));
};