import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AccordionItem from './AccordionItem';

const StyledAccordion = styled.div``;
const StyledAccordionName = styled.p``;

export type AccordionChildType = {
  key: string;
  name: string;
  content: string;
};
type AccordionItemType = {
  name: string;
  child: Array<AccordionChildType>;
};

type AccordionProps = {
  menus: Array<AccordionItemType>;
  activeKey?: string;
};

/**
 * Accordion
 *
 * menus: [name: string, child: [key:string, name:string, content: string]]
 * activeKey(optional): 처음부터 열려있길 원하는 메뉴의 key
 */
const Accordion: React.FC<AccordionProps> = ({
  menus,
  activeKey = undefined,
}) => {
  const [activeMenu, setActiveMenu] = useState<string | undefined>(activeKey);

  const accordionClick = (menukey: string) => {
    if (activeMenu !== menukey) {
      setActiveMenu(menukey);
    } else {
      setActiveMenu(undefined);
    }
  };

  return (
    <StyledAccordion>
      {menus.map((menu) => (
        <>
          <StyledAccordionName>{menu.name}</StyledAccordionName>

          {menu.child.map((item, i) => (
            <AccordionItem
              key={item.key}
              itemObject={item}
              isActive={item.key === activeMenu}
              handleClick={(val) => {
                accordionClick(val);
              }}
              isLastChild={i === menu.child.length - 1}
            />
          ))}
        </>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
