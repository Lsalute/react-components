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
    background-color: #794c8a;
    color: #fff;
  `,
  primary: css`
    border: 1px solid #5277de;
    background-color: #5277de;
    color: #fff;
  `,
  secondary: css`
    border: 1px solid #6c757d;
    background-color: #6c757d;
    color: #fff;
  `,
  success: css`
    border: 1px solid #55b97f;
    background-color: #55b97f;
    color: #fff;
  `,
  info: css`
    border: 1px solid #16aaff;
    background-color: #16aaff;
    color: #fff;
  `,
  warning: css`
    border: 1px solid #f7b924;
    background-color: #f7b924;
    color: #fff;
  `,
  danger: css`
    border: 1px solid #fa5252;
    background-color: #fa5252;
    color: #fff;
  `,
  focus: css`
    border: 1px solid #444054;
    background-color: #444054;
    color: #fff;
  `,
  light: css`
    border: 1px solid #eeeeee;
    background-color: #eeeeee;
    color: #333;
  `,
  dark: css`
    border: 1px solid #343a40;
    background-color: #343a40;
    color: #fff;
  `,
};

export { ButtonSizeStyles, ButtonVariantStyles };
