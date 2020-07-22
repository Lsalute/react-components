import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import { ButtonSizeStyles, ButtonVariantStyles } from './SolidButtonStyles';
import { ButtonVariant, ButtonSize } from './type';

////////// styled [START]
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
  ${({ variant }) => ButtonVariantStyles[variant]};
  ${({ size }) => ButtonSizeStyles[size]};
  border-radius: ${({ round }) => round}px;

  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }
`;
////////// styled [START]

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  rounded?: number;
  size?: ButtonSize;
  width?: number;
  block?: boolean;
  link?: LinkProps;
  minWidth?: number;
};

const SolidButton: React.FC<ButtonProps> = ({
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
  const renderButton = () => (
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

  if (link) {
    return <Link {...link}>{renderButton()}</Link>;
  }

  return renderButton();
};

export default SolidButton;
