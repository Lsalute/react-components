import { css, FlattenSimpleInterpolation } from 'styled-components';

import { sizeTypes, colorTypes } from './type';

type StyleSizeTypes = { [key in sizeTypes]: FlattenSimpleInterpolation };
type StyleColorTypes = { [key in colorTypes]: FlattenSimpleInterpolation };

const SwitchWidthStyles: StyleSizeTypes = {
  sm: css`
    width: 50px;
  `,
  md: css`
    width: 55px;
  `,
  lg: css`
    width: 60px;
  `,
};
const SwitchSizeStyles: StyleSizeTypes = {
  sm: css`
    width: 18px;
    height: 18px;
  `,
  md: css`
    width: 21px;
    height: 21px;
  `,
  lg: css`
    width: 23px;
    height: 23px;
  `,
};

const SwitchInnerStyles: StyleSizeTypes = {
  sm: css`
    height: 20px;
    line-height: 20px;
  `,
  md: css`
    height: 23px;
    line-height: 23px;
  `,
  lg: css`
    height: 25px;
    line-height: 25px;
  `,
};

const SwitchInnerPositionStyles: StyleSizeTypes = {
  sm: css`
    right: 31px;
  `,
  md: css`
    right: 33px;
  `,
  lg: css`
    right: 36px;
  `,
};

const SwitchColorStyles: StyleColorTypes = {
  alt: css`
    background-color: #794c8a;
  `,
  primary: css`
    background-color: #5277de;
  `,
  secondary: css`
    background-color: #6c757d;
  `,
  success: css`
    background-color: #55b97f;
  `,
  info: css`
    background-color: #16aaff;
  `,
  warning: css`
    background-color: #f7b924;
  `,
  danger: css`
    background-color: #fa5252;
  `,
  focus: css`
    background-color: #444054;
  `,
  light: css`
    background-color: #eeeeee;
  `,
  dark: css`
    background-color: #343a40;
  `,
};

export {
  SwitchSizeStyles,
  SwitchInnerStyles,
  SwitchWidthStyles,
  SwitchInnerPositionStyles,
  SwitchColorStyles,
};
