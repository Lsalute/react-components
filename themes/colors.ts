import { darken } from 'polished';

// colors
const baseColors = {
  primary: '#5277de',
  secondary: '#6c757d',
  success: '#55b97f',
  info: '#16aaff',
  warning: '#f7b924',
  danger: '#fa5252',
  focus: '#444054',
  alt: '#794c8a',
  light: '#eeeeee',
  dark: '#343a40',
};

// Grayscale colors
// ref: HSL Color system
const white = '#fff';
const grayscale = {
  gray90: darken(0.1, white),
  gray85: darken(0.25, white),
  gray75: darken(0.25, white),
  gray65: darken(0.35, white),
  gray60: darken(0.4, white),
  gray50: darken(0.5, white),
  gray35: darken(0.65, white),
  gray25: darken(0.75, white),
  gray15: darken(0.85, white),
};

// default ui colors
const defaultUIColors = {
  borderColor: '#dee2e6',
};

export { baseColors };
export type GrayScale = typeof grayscale;
export type BaseColors = typeof baseColors;
export type DefaultUIColors = typeof defaultUIColors;

export type Colors = GrayScale & BaseColors & DefaultUIColors;

export const colors: Colors = {
  ...grayscale,
  ...baseColors,
  ...defaultUIColors,
};
