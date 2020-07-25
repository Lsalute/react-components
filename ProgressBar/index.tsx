import React from 'react';
import styled, { css } from 'styled-components';

import { baseColors } from '~/themes/colors';

import { variant } from './type';

////////// styled [START]

type WrapperType = {
  height: number;
};
const Wrapper = styled.div<WrapperType>`
  width: 100%;
  height: ${({ height }) => height}px;
`;
type ContentType = {
  bgc: variant | string;
};
const Content = styled.div<ContentType>`
  background-color: ${({ bgc }) =>
    bgc.includes('#') ? bgc : baseColors[bgc as variant]};
  height: 100%;
`;
type ActiveBarType = {
  bgc: variant | string;
  minWidth: number;
  railWidth: number;
};
const ActiveBar = styled.div<ActiveBarType>`
  min-width: ${({ minWidth }) => minWidth}%;
  width: ${({ railWidth }) => railWidth}%;
  height: 100%;
  background-color: ${({ bgc }) =>
    bgc.includes('#') ? bgc : baseColors[bgc as variant]};
`;
////////// styled [END]

type ProgressBarProps = {
  min: number;
  value: number;
  color: variant | string;
  railColor: variant | string;
  height?: number;
};
/**
 * required : min, value, color, railColor
 *
 * option: height
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  min,
  value,
  color,
  railColor,
  height = 20,
}) => {
  return (
    <Wrapper height={height}>
      <Content bgc={color}>
        <ActiveBar bgc={railColor} minWidth={min} railWidth={value}></ActiveBar>
      </Content>
    </Wrapper>
  );
};

export default ProgressBar;
