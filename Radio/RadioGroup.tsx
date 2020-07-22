import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Radio from './index';
import { sizeType, colors } from './type';

type WrapperType = {
  block: boolean;
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
        `};
`;
const Item = styled.div`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export type OptionType = {
  label: string;
  value: string;
};
type RadioGroupProps = {
  options: Array<OptionType>;
  name: string;
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
  block = false,
  options,
  defaultCheckedValue = '',
  color = 'purple',
  name,
  size = 'md',
  disabled = false,
  onChange,
}) => {
  const [checkedValue, setCheckedValue] = useState<any>(
    defaultCheckedValue || options?.[0]?.value
  );

  return (
    <Wrapper block={block}>
      {options.map((option, i) => (
        <Item key={`${option.value}-${i}`}>
          <Radio
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
