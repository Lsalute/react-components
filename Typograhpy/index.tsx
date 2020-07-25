import { ellipsis } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { baseColors } from '~/themes/colors';

import { typoStyles } from './styles';
import { typoType, weightType, colorType } from './type';

//////////////////////////////// styled [START]
type TextType = {
  _type: typoType;
  _weight: weightType;
  _color: colorType;
  _lineHeight: number;
  _letterSpacing: number;
};
const Text = styled.span<TextType>`
  ${({ _type }) => typoStyles[_type]};
  color: ${({ _color }) => baseColors[_color]};
  font-weight: ${({ _weight }) => _weight};
  line-height: ${({ _lineHeight }) => _lineHeight};
  letter-spacing: ${({ _letterSpacing }) => _letterSpacing}px;
`;

type TruncateType = {
  _type: typoType;
  _weight: weightType;
  _color: colorType;
  _lineHeight: number;
  _letterSpacing: number;
  _line: number;
  _width: string;
};
// Truncate: before와 after은 ie 문제로 인하여 추가한 스타일F
const Truncate = styled.span<TruncateType>`
  position: relative;
  ${({ _type }) => typoStyles[_type]};
  width: ${({ _width }) => _width};
  max-height: ${({ _lineHeight, _line }) => _lineHeight * _line}em;

  overflow: hidden;

  color: ${({ _color }) => baseColors[_color]};
  font-weight: ${({ _weight }) => _weight};
  line-height: ${({ _lineHeight }) => _lineHeight};
  letter-spacing: ${({ _letterSpacing }) => _letterSpacing}px;
  text-align: justify;

  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1em;
    height: ${({ _lineHeight }) => _lineHeight}em;

    margin-top: 0.2em;

    background-color: #fff;
    z-index: 1;
  }
`;
//////////////////////////////// styled [END]

type TypograhpyProps = {
  as?: 'p' | 'span' | 'div';
  type?: typoType;
  weight?: weightType;
  color?: colorType;
  lineHeight?: number;
  letterSpacing?: number;
  ellipsis?: { line?: number; width: string } | undefined;
};
const Typograhpy: React.FC<TypograhpyProps> = ({
  children,
  as = 'span',
  type = 'description',
  weight = 400,
  color = 'dark',
  lineHeight = 1.56,
  letterSpacing = -0.7,
  ellipsis = undefined,
}) => {
  return (
    <>
      {!ellipsis && (
        <Text
          as={as}
          _type={type}
          _weight={weight}
          _color={color}
          _lineHeight={lineHeight}
          _letterSpacing={letterSpacing}
        >
          {children}
        </Text>
      )}
      {ellipsis && (
        <Truncate
          as={as}
          _type={type}
          _weight={weight}
          _color={color}
          _lineHeight={lineHeight}
          _letterSpacing={letterSpacing}
          _line={ellipsis.line as number}
          _width={ellipsis.width as string}
        >
          {children}
        </Truncate>
      )}
    </>
  );
};

export default Typograhpy;
