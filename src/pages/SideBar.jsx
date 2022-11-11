import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute  } from '../elements/SidebarElement';

const SideBar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="ShopPage" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="ShopPage" onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to="PartnerPage" onClick={toggle}>
              Service
            </SidebarLink>
            <SidebarLink to="BlogPage" onClick={toggle}>
              Works
            </SidebarLink>
            <SidebarLink to="Resume" onClick={toggle}>
              Resume
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="Footer">Contact</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default SideBar
