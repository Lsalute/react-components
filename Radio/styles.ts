import { css, FlattenSimpleInterpolation } from 'styled-components';

import { sizeType, colors, colorList } from './type';

type sizeTypes = {
  [key in sizeType]: FlattenSimpleInterpolation;
};

type colorTypes = {
  [key in colors]: FlattenSimpleInterpolation;
};

const sizeStyles: sizeTypes = {
  sm: css`
    width: 16px;
    height: 16px;
  `,
  md: css`
    width: 18px;
    height: 18px;
  `,
  lg: css`
    width: 20px;
    height: 20px;
  `,
};

const markSizeStyles: sizeTypes = {
  sm: css`
    width: 8px;
    height: 8px;
  `,
  md: css`
    width: 10px;
    height: 10px;
  `,
  lg: css`
    width: 12px;
    height: 12px;
  `,
};

const textHeightStyles: sizeTypes = {
  sm: css`
    line-height: 16px;
  `,
  md: css`
    line-height: 18px;
  `,
  lg: css`
    line-height: 20px;
  `,
};

const labelPaddingStyles: sizeTypes = {
  sm: css`
    padding-left: 22px;
  `,
  md: css`
    padding-left: 24px;
  `,
  lg: css`
    padding-left: 26px;
  `,
};

const fontStyles: sizeTypes = {
  sm: css`
    font-size: 14px;
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
  `,
};

const ButtonBorderStyles: colorTypes = {
  purple: css`
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  `,
  red: css`
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  `,
  blue: css`
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  `,
};
const ButtonColorStyles: colorTypes = {
  purple: css`
    background-color: rgba(108, 99, 255, 0.5);
    color: #fff;
  `,
  red: css`
    background-color: rgba(196, 22, 28, 0.5);
    color: #fff;
  `,
  blue: css`
    background-color: rgba(37, 95, 254, 0.5);
    color: #fff;
  `,
};

const ButtonActiveStyles: colorTypes = {
  purple: css`
    background-color: #6c63ff;
    color: #fff;
  `,
  red: css`
    background-color: #c4161c;
    color: #fff;
  `,
  blue: css`
    background-color: #255ffe;
    color: #fff;
  `,
};

const ButtonPaddingStyles: sizeTypes = {
  sm: css`
    & label {
      line-height: 25px;
      padding: 0 5px;
    }
  `,
  md: css`
    & label {
      line-height: 30px;
      padding: 0 10px;
    }
  `,
  lg: css`
    & label {
      line-height: 40px;
      padding: 0 12px;
    }
  `,
};

export {
  sizeStyles,
  markSizeStyles,
  textHeightStyles,
  labelPaddingStyles,
  fontStyles,
  ButtonColorStyles,
  ButtonActiveStyles,
  ButtonPaddingStyles,
  ButtonBorderStyles,
};
