import React from 'react';
import styled, { css } from 'styled-components';

import {
  SwitchSizeStyles,
  SwitchInnerStyles,
  SwitchWidthStyles,
  SwitchInnerPositionStyles,
  SwitchColorStyles,
} from './styles';
import { sizeTypes, colorTypes } from './type';

/////////////////////////////////// styled [START]
type StyledContentType = {
  _size: sizeTypes;
};
const StyledContent = styled.div<StyledContentType>`
  position: relative;
  ${({ _size }) => SwitchWidthStyles[_size]};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;
const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;

  background-color: #d3d2d2;
  border-radius: 20px;
`;

type InnerType = {
  isChecked: boolean;
  _size: sizeTypes;
  _color: colorTypes;
};
const Inner = styled.span<InnerType>`
  display: block;
  width: 200%;
  margin-left: ${({ isChecked }) => (isChecked ? '0px' : '-100%')};

  transition: margin 0.3s ease-in 0s;

  &:before,
  &:after {
    float: left;
    display: block;
    width: 50%;
    ${({ _size }) => SwitchInnerStyles[_size]};

    padding: 0;

    color: white;
    font-size: 14px;
    font-weight: bold;
  }

  &:before {
    content: '';
    padding-left: 0px;
    ${({ _color }) => SwitchColorStyles[_color]};
  }

  &:after {
    padding-right: 10px;
    background-color: #ffffff;

    text-align: right;
  }
`;

type StyledSwitchType = {
  isChecked: boolean;
  _size: sizeTypes;
};
const StyledSwitch = styled.span<StyledSwitchType>`
  ${({ _size }) => SwitchSizeStyles[_size]};
  display: block;

  background: #ffffff;
  position: absolute;
  top: 1px;
  bottom: 0;
  ${({ isChecked, _size }) =>
    isChecked
      ? css`
          right: 1px;
        `
      : SwitchInnerPositionStyles[_size]};
  background-color: #ffffff;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;
/////////////////////////////////// styled [START]

type SwitchProps = {
  id: string;
  checked?: boolean;
  size?: sizeTypes;
  color?: colorTypes;
  onChange?: (val: any) => void;
};
const Switch: React.FC<SwitchProps> = ({
  id,
  size = 'md',
  color = 'primary',
  onChange = (val) => {},
}) => {
  const [checkedState, setCheckedState] = React.useState(false);

  return (
    <StyledContent _size={size}>
      <StyledCheckbox
        id={id}
        type="checkbox"
        name="switch"
        value={`${checkedState}`}
        checked={checkedState}
        onChange={() => {
          setCheckedState(!checkedState);
          onChange(!checkedState);
        }}
      />
      <Label htmlFor={id}>
        <Inner _size={size} _color={color} isChecked={checkedState}></Inner>
        <StyledSwitch _size={size} isChecked={checkedState}></StyledSwitch>
      </Label>
    </StyledContent>
  );
};

export default Switch;
