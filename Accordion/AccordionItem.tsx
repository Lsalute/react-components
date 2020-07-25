import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

import { AccordionChildType } from './index';

//////////////////////////// styled [START]
const Wrapper = styled.div``;

type HeaderType = {
  _isLast: boolean;
};
const Header = styled.div<HeaderType>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: #eee;
  border-bottom: ${({ _isLast }) => (_isLast ? '' : '1px solid #d2d2d2')};
  cursor: pointer;
`;
const Title = styled.span`
  display: inline-block;
`;
type IconType = {
  _active: boolean;
};
const Icon = styled.div<IconType>`
  display: flex;
  align-items: center;
  transform: ${({ _active }) => (_active ? 'rotate(90deg)' : 'rotate(0)')};
`;
type BodyType = {
  isShow: boolean;
};
const Body = styled.div<BodyType>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  padding: 10px;
`;

//////////////////////////// styled [END]

type AccordionItemProps = {
  itemObject: AccordionChildType;
  isActive?: boolean;
  isLastChild: boolean;
  handleClick: (val: any) => void;
};
const AccordionItem: React.FC<AccordionItemProps> = ({
  itemObject,
  isActive = false,
  isLastChild,
  handleClick,
}) => {
  return (
    <Wrapper>
      <Header _isLast={isLastChild} onClick={() => handleClick(itemObject.key)}>
        <Title>{itemObject.name}</Title>
        <Icon _active={isActive}>
          <IoIosArrowForward />
        </Icon>
      </Header>
      <Body isShow={isActive}>{itemObject.content}</Body>
    </Wrapper>
  );
};

export default AccordionItem;
