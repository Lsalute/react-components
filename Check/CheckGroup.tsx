import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Check from './index';
import { sizeType, colors } from './type';

///////////// styled [START]
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
        `}
`;
const Item = styled.div`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;
///////////// styled [END]

export type OptionType = {
  label: string;
  value: string;
};
type CheckGroupProps = {
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
const CheckGroup: React.FC<CheckGroupProps> = ({
  options,
  name,
  block = false,
  color = 'purple',
  defaultCheckedValue = '',
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
          <Check
            label={option.label}
            id={option.value}
            name={name}
            value={option.value}
            checked={option.value === checkedValue}
            color={color}
            disabled={disabled}
            size={size}
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

export default CheckGroup;
