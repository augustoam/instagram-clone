import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Arial';
export const FONT_FAMILY_BOLD = 'Arial-BoldMT';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_41 = scaleFont(41);
export const FONT_SIZE_25 = scaleFont(25);
export const FONT_SIZE_23 = scaleFont(23);
export const FONT_SIZE_21 = scaleFont(21);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_15 = scaleFont(15);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_11 = scaleFont(11);
export const FONT_SIZE_10 = scaleFont(10);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};