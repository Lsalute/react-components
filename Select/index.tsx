import React, { useState } from 'react';
import Select, { Props } from 'react-select';
import styled, { css } from 'styled-components';

import { SelectSizeStyles, FontSizeStyles } from './style';
import { sizeType } from './type';

//////// styled [START]
type WrapperType = {
  customWidth: number;
  block: boolean;
  sizeOption: sizeType;
};
const Wrapper = styled.div<WrapperType>`
  position: relative;
  user-select: none;
  width: ${({ customWidth, block }) => (block ? '100%' : `${customWidth}px`)};

  & [class$='control'] {
    ${({ sizeOption }) => SelectSizeStyles[sizeOption]};
  }

  & [class$='menu'] {
    margin-top: 1px;
    margin-bottom: 0;
  }

  & [class$='indicatorContainer'] {
    padding: 0 5px;
  }

  & [class$='placeholder'] {
    ${({ sizeOption }) => FontSizeStyles[sizeOption]}
  }

  & [class$='option'] {
    ${({ sizeOption }) => FontSizeStyles[sizeOption]}
  }
`;

//////// styled [End]

type optionType = {
  label: string;
  value: string;
};
export type SelectBoxProps = Omit<
  Props,
  'isMulti' | 'options' | 'placeholder'
> & {
  name?: string;
  label?: string;
  options?: optionType[];
  value?: optionType | optionType[] | undefined;
  width?: number;
  block?: boolean;
  size?: sizeType;
  multiple?: boolean;
  selectChange: (val: string) => void;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  name = 'selectbox',
  label = '선택해주세요',
  options = [{ label: '', value: '' }],
  value = undefined,
  width = 200,
  block = false,
  size = 'md',
  multiple = false,
  selectChange,
  ...rest
}) => {
  //// state[START]
  const [selectedValue, setSelectedValue] = useState<
    optionType | optionType[] | undefined
  >(value);
  //// state[END]

  const handleChange = (selectedValue: any) => {
    setSelectedValue(selectedValue);
    selectChange(selectedValue);
  };

  return (
    <Wrapper customWidth={width} block={block} sizeOption={size}>
      <Select
        {...rest}
        options={options}
        isMulti={multiple}
        value={selectedValue}
        placeholder={label}
        onChange={handleChange}
        instanceId={name}
      />
    </Wrapper>
  );
};

export default SelectBox;
