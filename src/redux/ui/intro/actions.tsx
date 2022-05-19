import { ActionType } from "./models/ActionType";

const onShowSliderIntro = (show: boolean) => ({
    type: ActionType.SLIDER_INTRO,
    show: show
});


export const onShowSliderIntroChanged = (show: boolean) => (dispatch: any) => {
    dispatch(onShowSliderIntro(show));
};