import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Radio from './index';
import { sizeType, colors, radioType } from './type';

type WrapperType = {
  block: boolean;
  _type: radioType;
};
const Wrapper = styled.div<WrapperType>`
  ${({ block }) =>
    block
      ? css`
          display: block;
        `
      : css`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        `};

  ${({ _type }) =>
    _type === 'button'
      ? css`
          border-radius: 3px;
          overflow: hidden;
        `
      : css``};
`;

type ItemType = {
  _type: radioType;
};
const Item = styled.div<ItemType>`
  ${({ _type }) =>
    _type === 'radio'
      ? css`
          margin-right: 10px;

          &:last-child {
            margin-right: 0;
          }
        `
      : css``}
`;

export type OptionType = {
  label: string;
  value: string;
};
type RadioGroupProps = {
  options: Array<OptionType>;
  name: string;
  type?: radioType;
  block?: boolean;
  color?: colors;
  defaultCheckedValue?: string;
  size?: sizeType;
  disabled?: boolean;
  onChange?: (value: any) => void;
};
/**
 * required: options, name
 *
 * option: block, defaultCheckedValue, size, disabled, onChange
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  type = 'radio',
  block = false,
  defaultCheckedValue = '',
  color = 'purple',
  size = 'md',
  disabled = false,
  onChange,
}) => {
  const [checkedValue, setCheckedValue] = useState<any>(
    defaultCheckedValue || options?.[0]?.value
  );

  return (
    <Wrapper block={block} _type={type}>
      {options.map((option, i) => (
        <Item key={`${option.value}-${i}`} _type={type}>
          <Radio
            type={type}
            label={option.label}
            id={option.value}
            name={name}
            size={size}
            value={option.value}
            color={color}
            checked={option.value === checkedValue}
            disabled={disabled}
            onChange={(e) => {
              setCheckedValue(e.currentTarget.value);
              onChange?.(e.currentTarget.value);
            }}
          />
        </Item>
      ))}
    </Wrapper>
  );
};

export default RadioGroup;
