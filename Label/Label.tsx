import React from 'react';
import styled from 'styled-components';

type StyledLabelType = {
  _fontSize: number;
};
const StyledLabel = styled.label<StyledLabelType>`
  display: inline-block;
  color: inherit;
  font-size: ${({ _fontSize }) => _fontSize}px;
`;

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  labelFor: string;
  fontSize?: number;
};
const Label: React.FC<LabelProps> = ({
  children,
  labelFor,
  fontSize = 14,
  ...rest
}) => {
  return (
    <StyledLabel {...rest} htmlFor={labelFor} _fontSize={fontSize}>
      {children}
    </StyledLabel>
  );
};

export default Label;
