import React from 'react';
import styled from 'styled-components';

import Label from '~/components/Label';

import {
  sizeStyles,
  markSizeStyles,
  textHeightStyles,
  labelPaddingStyles,
  fontStyles,
} from './styles';
import { colors, colorList, sizeType } from './type';

///////////////////////////////// style [START]
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

type InputType = {
  checkColor: colors;
};
const Input = styled.input<InputType>`
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + .checkmark {
    background-color: ${({ checkColor }) => colorList[checkColor]};
    border: 1px solid ${({ checkColor }) => colorList[checkColor]};
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`;

type CheckMarkType = {
  sizeOption: sizeType;
  checkColor: colors;
};
const CheckMark = styled.div<CheckMarkType>`
  position: absolute;
  top: 0;
  left: 0;
  ${({ sizeOption }) => sizeStyles[sizeOption]};
  border: 1px solid #ccc;
  border-radius: 0.1rem;

  &:after {
    content: '';
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    ${({ sizeOption }) => markSizeStyles[sizeOption]};

    background-image: url('/icons/icon-checkmark-240.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    transform: translate(-50%, -50%);
  }
`;

type TextType = {
  sizeOption: sizeType;
};
const Text = styled.span<TextType>`
  ${({ sizeOption }) => fontStyles[sizeOption]};
`;
///////////////////////////////// style [END]

type CheckProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  id: string;
  label?: string;
  name?: string;
  value?: string;
  width?: number;
  color?: colors;
  size?: sizeType;
};
/**
 * required: id
 *
 * option: label, name, value, width, color,size
 */
const Check: React.FC<CheckProps> = ({
  id,
  label,
  name = id,
  value = '',
  width = 18,
  color = 'purple',
  size = 'md',
  onChange,
  ...rest
}) => {
  return (
    <Wrapper>
      <LabelWrapper sizeOption={size}>
        <Label labelFor={id} style={{ cursor: 'pointer' }}>
          <Input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            checkColor={color}
            {...rest}
          />
          <CheckMark
            className="checkmark"
            sizeOption={size}
            checkColor={color}
          />
          {label && <Text sizeOption={size}>{label}</Text>}
        </Label>
      </LabelWrapper>
    </Wrapper>
  );
};

export default Check;
