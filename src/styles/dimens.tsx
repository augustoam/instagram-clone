import { Dimensions, Platform } from "react-native";
const Dimens = {
    BUTTON_PADDING: 13,
    CARD_HEIGHT: 85,
    HALF_PADDING: 5,
    PADDING: 10,
    DOUBLE_PADDING: 20,
    TRIPLE_PADDING: 30,
    QUAD_PADDING: 40,
    ICON_SIZE: 50,
    TINY_ICON_SIZE: 15,
    SMALL_ICON_SIZE: 25,
    MEDIUM_ICON_SIZE: 30,
    AVATAR_SIZE: 90,
    ROUND_BUTTON_HEIGHT: 70,
    LOCATION_MARKER_SIZE: Platform.OS === 'ios' ? 22 : 18,
    LINE_HEIGHT: Platform.OS === 'ios' ? 30 : 40,

    WINDOW_HEIGHT: Dimensions.get('window').height,
    WINDOW_WIDTH: Dimensions.get('window').width
};

export default Dimens;