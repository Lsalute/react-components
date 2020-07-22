import { LinkProps } from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import { ButtonSizeStyles, ButtonVariantStyles } from './GhostButtonStyles';
import { ButtonProps } from './SolidButton';
import { ButtonVariant, ButtonSize } from './type';

////////////// styled [START]
type StyledButtonType = {
  variant: ButtonVariant;
  round: number;
  size: ButtonSize;
  _width: number;
  minWidth: number;
  block: boolean;
};
const StyledButton = styled.button<StyledButtonType>`
  ${({ block, _width }) =>
    block
      ? css`
          width: 100%;
        `
      : css`
          width: ${_width}px;
        `};
  min-width: ${({ minWidth }) => minWidth}px;
  ${({ size }) => ButtonSizeStyles[size]};
  ${({ variant }) => ButtonVariantStyles[variant]};
  border-radius: ${({ round }) => round}px;

  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }
`;
////////////// styled [END]

const GhostButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  rounded = 0,
  size = 'md',
  width = 80,
  block = false,
  minWidth = 40,
  link,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      variant={variant}
      round={rounded}
      size={size}
      _width={width}
      minWidth={minWidth > width ? width : minWidth}
      block={block}
    >
      {children}
    </StyledButton>
  );
};

export default GhostButton;
