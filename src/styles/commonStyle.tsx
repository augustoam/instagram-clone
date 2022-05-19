
import { StyleSheet } from 'react-native';
import { BLACK, TRANSPARENT, GRAY, LIGHT_GRAY, BLUE, BACKGROUND } from './colors';
import Dimens from './dimens';
import { FONT_FAMILY_REGULAR, FONT_SIZE_10, FONT_SIZE_11, FONT_SIZE_13, FONT_SIZE_15, FONT_SIZE_18, FONT_SIZE_21, FONT_SIZE_23, FONT_SIZE_25, FONT_SIZE_41 } from './typography';

export default StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: BACKGROUND
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  h1: {
    color: BLUE,
    fontSize: FONT_SIZE_41,
    fontWeight: 'bold',
  },
  h2: {
    color: BLACK,
    fontSize: FONT_SIZE_25,
    fontWeight: 'bold',
  },
  h3: {
    color: GRAY,
    fontSize: FONT_SIZE_15,
  },
  h3U: {
    color: GRAY,
    fontSize: FONT_SIZE_15,
    textTransform: 'uppercase',
  },
  h4: {
    color: BLACK,
    fontSize: FONT_SIZE_15,
    fontWeight: 'bold',
  },
  h5: {
    color: GRAY,
    lineHeight: 20,
    fontSize: FONT_SIZE_13,
  },
  h6: {
    color: GRAY,
    fontSize: FONT_SIZE_11,
  },
  h7: {
    color: GRAY,
    fontSize: FONT_SIZE_10,
  },
  h8: {
    color: BLUE,
    fontSize: FONT_SIZE_23,
  },
  h9: {
    color: BLUE,
    fontSize: FONT_SIZE_21,
  },
  p: {
    color: BLACK,
    fontSize: FONT_SIZE_18,
  },
  pBold: {
    color: BLACK,
    fontSize: FONT_SIZE_18,
    fontWeight: 'bold',
  },
  labelPadding: {
    paddingBottom: Dimens.HALF_PADDING,
  },
  titlePadding: {
    paddingLeft: Dimens.DOUBLE_PADDING,
    paddingBottom: Dimens.DOUBLE_PADDING,
  },
  containerButton: {
    justifyContent: 'flex-end',
    paddingLeft: Dimens.DOUBLE_PADDING,
    paddingRight: Dimens.DOUBLE_PADDING,
    paddingBottom: Dimens.DOUBLE_PADDING,
  },
  containerButtonFlex: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerDataScaleOne: {
    flex: 1, height: '100%',
    paddingLeft: Dimens.PADDING,
    paddingRight: Dimens.PADDING,
    paddingBottom: Dimens.PADDING,
  },
  containerDataScaleTwo: {
    flex: 1, height: '100%',
    paddingLeft: Dimens.DOUBLE_PADDING,
    paddingRight: Dimens.DOUBLE_PADDING,
    paddingBottom: Dimens.DOUBLE_PADDING,
  },
  containerDataScaleTwoPaddingTop: {
    flex: 1, height: '100%',
    paddingTop: Dimens.PADDING,
    paddingLeft: Dimens.DOUBLE_PADDING,
    paddingRight: Dimens.DOUBLE_PADDING,
    paddingBottom: Dimens.DOUBLE_PADDING,
  },
  containerDataScaleThree: {
    paddingLeft: Dimens.TRIPLE_PADDING,
    paddingRight: Dimens.TRIPLE_PADDING,
    paddingBottom: Dimens.TRIPLE_PADDING,
  },
  paddingList: {
    paddingTop: Dimens.PADDING,
    paddingBottom: Dimens.PADDING
  },
  headerLabel: {
    color: BLACK,
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 5,
    paddingBottom: Dimens.PADDING,
  },
  buttonRound: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: LIGHT_GRAY,
    backgroundColor: LIGHT_GRAY,
    padding: 4,
  },
  input: {
    marginBottom: 5,
    backgroundColor: LIGHT_GRAY,
    height: 50,
    borderRadius: 8,
    borderColor: TRANSPARENT,
    fontFamily: FONT_FAMILY_REGULAR
  }
});
