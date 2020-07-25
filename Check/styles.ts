import { css, FlattenSimpleInterpolation } from 'styled-components';

import { sizeType } from './type';

type sizeTypes = {
  [key in sizeType]: FlattenSimpleInterpolation;
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
    width: 13px;
    height: 13px;
  `,
  md: css`
    width: 15px;
    height: 15px;
  `,
  lg: css`
    width: 17px;
    height: 17px;
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

export {
  sizeStyles,
  markSizeStyles,
  textHeightStyles,
  labelPaddingStyles,
  fontStyles,
};
