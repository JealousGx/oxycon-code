import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>OxyCon</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="overview" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Overview</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="testing" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Testing</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="photos" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Photos</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="workshop" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Workshop</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="assembly" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Assembly</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
                </IconContext.Provider>
        </>
    )
}

export default Navbar
