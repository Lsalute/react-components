import React from 'react';
import styled from 'styled-components';

import {
  sizeStyles,
  markSizeStyles,
  textHeightStyles,
  labelPaddingStyles,
  fontStyles,
} from './styles';
import { colors, colorList, sizeType } from './type';

////////////////////// styled [START]
const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

type LabelType = {
  sizeOption: sizeType;
};
const Label = styled.label<LabelType>`
  ${({ sizeOption }) => labelPaddingStyles[sizeOption]};
  display: inline-block;
  cursor: pointer;
`;

type TextType = {
  sizeOption: sizeType;
};
const Text = styled.span<TextType>`
  ${({ sizeOption }) => textHeightStyles[sizeOption]};
  ${({ sizeOption }) => fontStyles[sizeOption]};
`;
////////////////////// styled [END]

type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'checked'
> & {
  id: string;
  name: string;
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
      <Label htmlFor={id} sizeOption={size}>
        <Input
          {...rest}
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <CheckMark className="checkmark" radioColor={color} sizeOption={size} />
        {label && <Text sizeOption={size}>{label}</Text>}
      </Label>
    </Wrapper>
  );
};

export default Radio;
