import React from 'react';
import styled from 'styled-components';

type WrapperType = {
  width: number;
};
const Wrapper = styled.div<WrapperType>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;

  background-color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
  }
`;

type AvartarProps = {
  width?: number;
  src?: string;
};
const Avartar: React.FC<AvartarProps> = ({
  width = 30,
  src = '/images/no-image.jpg',
}) => {
  return (
    <Wrapper width={width}>
      <img src={src} />
    </Wrapper>
  );
};

export default Avartar;
