import { BaseColors } from '~/themes/colors';

export type colorType = keyof BaseColors;
export type weightType = 300 | 400 | 500 | 700;
export type asType = 'p' | 'span';
export type typoType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'title'
  | 'subTitle'
  | 'body'
  | 'description'
  | 'caption';
