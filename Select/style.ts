import { css, FlattenSimpleInterpolation } from 'styled-components';

import { sizeType } from './type';

type sizeTypes = {
  [key in sizeType]: FlattenSimpleInterpolation;
};

const SelectSizeStyles: sizeTypes = {
  sm: css`
    min-height: 25px;
  `,
  md: css`
    min-height: 35px;
  `,
  lg: css`
    min-height: 40px;
  `,
};

const FontSizeStyles: sizeTypes = {
  sm: css`
    font-size: 12px;
  `,
  md: css`
    font-size: 14px;
  `,
  lg: css`
    font-size: 16px;
  `,
};

export { SelectSizeStyles, FontSizeStyles };
