import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colorType, weightType, asType, typoType } from './type';

type typoTypes = {
  [key in typoType]: FlattenSimpleInterpolation;
};

const typoStyles: typoTypes = {
  heading1: css`
    font-size: 35px;
  `,
  heading2: css`
    font-size: 30px;
  `,
  heading3: css`
    font-size: 25px;
  `,
  heading4: css`
    font-size: 20px;
  `,
  title: css`
    font-size: 18px;
  `,
  subTitle: css`
    font-size: 16px;
  `,
  body: css`
    font-size: 16px;
  `,
  description: css`
    font-size: 16px;
  `,
  caption: css`
    font-size: 12px;
  `,
};

export { typoStyles };
