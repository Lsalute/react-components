import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonVariant, ButtonSize } from './type';

type ButtonSizeTypes = {
  [key in ButtonSize]: FlattenSimpleInterpolation;
};

type ButtonVariantTypes = {
  [key in ButtonVariant]: FlattenSimpleInterpolation;
};

const ButtonSizeStyles: ButtonSizeTypes = {
  sm: css`
    height: 25px;
    line-height: 15px;
    font-size: 14px;
  `,
  md: css`
    height: 35px;
    line-height: 25px;
    font-size: 16px;
  `,
  lg: css`
    height: 40px;
    line-height: 30px;
    font-size: 18px;
  `,
};

const ButtonVariantStyles: ButtonVariantTypes = {
  alt: css`
    border: 1px solid #794c8a;
    background-color: #fff;
    color: #794c8a;
  `,
  primary: css`
    border: 1px solid #5277de;
    background-color: #fff;
    color: #5277de;
  `,
  secondary: css`
    border: 1px solid #6c757d;
    background-color: #fff;
    color: #6c757d;
  `,
  success: css`
    border: 1px solid #55b97f;
    background-color: #fff;
    color: #55b97f;
  `,
  info: css`
    border: 1px solid #16aaff;
    background-color: #fff;
    color: #16aaff;
  `,
  warning: css`
    border: 1px solid #f7b924;
    background-color: #fff;
    color: #f7b924;
  `,
  danger: css`
    border: 1px solid #fa5252;
    background-color: #fff;
    color: #fa5252;
  `,
  focus: css`
    border: 1px solid #444054;
    background-color: #fff;
    color: #444054;
  `,
  light: css`
    border: 1px solid #eeeeee;
    background-color: #fff;
    color: #999;
  `,
  dark: css`
    border: 1px solid #343a40;
    background-color: #fff;
    color: #343a40;
  `,
};

export { ButtonSizeStyles, ButtonVariantStyles };
