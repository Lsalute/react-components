import React from 'react';
import styled from 'styled-components';

import Label from '../Label';
import {
  sizeStyles,
  markSizeStyles,
  textHeightStyles,
  labelPaddingStyles,
  fontStyles,
  ButtonColorStyles,
  ButtonActiveStyles,
  ButtonPaddingStyles,
  ButtonBorderStyles,
} from './styles';
import { colors, colorList, sizeType, radioType } from './type';

////////////////////// styled [START]
//////// type radio [START]
const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

type LabelWrapperType = {
  sizeOption: sizeType;
};
const LabelWrapper = styled.div<LabelWrapperType>`
  ${({ sizeOption }) => labelPaddingStyles[sizeOption]};
  ${({ sizeOption }) => textHeightStyles[sizeOption]};
`;

const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;

  &:checked + .checkmark {
    background-color: #fff;
  }

  &:checked + .checkmark:after {
    display: block;
  }
`;

type CheckMarkType = {
  sizeOption: sizeType;
  radioColor: colors;
};
const CheckMark = styled.div<CheckMarkType>`
  ${({ sizeOption }) => sizeStyles[sizeOption]};
  position: absolute;
  top: 0;
  left: 0;

  border: 2px solid ${({ radioColor }) => colorList[radioColor]};
  border-radius: 50%;

  &:after {
    ${({ sizeOption }) => markSizeStyles[sizeOption]};

    content: '';
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: ${({ radioColor }) => colorList[radioColor]};
    border-radius: 50%;
  }
`;

type TextType = {
  sizeOption: sizeType;
};
const Text = styled.span<TextType>`
  ${({ sizeOption }) => fontStyles[sizeOption]};
`;
//////// type radio [END]
/////// type button [START]
type ButtonWrapper = {
  _color: colors;
  sizeOption: sizeType;
  isActive: boolean;
};
const ButtonWrapper = styled.div<ButtonWrapper>`
  ${({ _color }) => ButtonColorStyles[_color]};
  ${({ sizeOption }) => ButtonPaddingStyles[sizeOption]};
  ${({ _color }) => ButtonBorderStyles[_color]};
  ${({ isActive, _color }) => (isActive ? ButtonActiveStyles[_color] : '')};

  &:last-child {
    border-right: 0;
  }

  & > label {
    ${({ sizeOption }) => fontStyles[sizeOption]};
  }
`;
/////// type button [END]

////////////////////// styled [END]

type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'checked'
> & {
  id: string;
  name: string;
  type?: radioType;
  checked?: boolean;
  label?: string;
  width?: number;
  value?: string;
  color?: colors;
  size?: sizeType;
};
/**
 * required: id, name
 *
 * option : checked, label, width, value, color, size
 */
const Radio: React.FC<RadioProps> = ({
  id,
  name,
  type = 'radio',
  label,
  width = 20,
  value = '',
  color = 'purple',
  size = 'md',
  checked = false,
  onChange,
  ...rest
}) => {
  return (
    <Wrapper>
      {type === 'radio' ? (
        <LabelWrapper sizeOption={size}>
          <Label labelFor={id} style={{ cursor: 'pointer' }}>
            <Input
              {...rest}
              type="radio"
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              checked={checked}
            />
            <CheckMark
              className="checkmark"
              radioColor={color}
              sizeOption={size}
            />
            {label && <Text sizeOption={size}>{label}</Text>}
          </Label>
        </LabelWrapper>
      ) : (
        <ButtonWrapper _color={color} sizeOption={size} isActive={checked}>
          <Label labelFor={id} style={{ cursor: 'pointer' }}>
            <Input
              {...rest}
              type="radio"
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              checked={checked}
            />
            {label}
          </Label>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default Radio;
