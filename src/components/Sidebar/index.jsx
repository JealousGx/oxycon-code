import React from 'react'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="overview" onClick={toggle}>
                        Overview
                    </SidebarLink>
                    <SidebarLink to="testing" onClick={toggle}>
                        Testing
                    </SidebarLink>
                    <SidebarLink to="photos" onClick={toggle}>
                        Photos
                    </SidebarLink>
                    <SidebarLink to="workshop" onClick={toggle}>
                        Workshop
                    </SidebarLink>
                    <SidebarLink to="assembly" onClick={toggle}>
                        Assembly
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
