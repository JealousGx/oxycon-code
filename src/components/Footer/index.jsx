import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

import { 
    FooterContainer, 
    FooterExternalLink,
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    } from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">Group Members: </FooterLink>
                            <FooterLink to="/">Abdul Mateen Khilji (033-19-0008)</FooterLink>
                            <FooterLink to="/">Hamza Ali Arain (033-19-0025)</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Supervisor / Instructor</FooterLinkTitle>
                            <FooterLink to="/">Dr. Muhammad Asim Samejo</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                            <FooterExternalLink href='https://iba-suk.edu.pk' target="_blank" aria-label="SIBAU">Sukkur IBA University</FooterExternalLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Source Code</FooterLinkTitle>
                            <FooterLink to="/signin">Singapore</FooterLink>
                            <FooterLink to="/signin">New York</FooterLink>
                            <FooterLink to="/signin">London</FooterLink>
                            <FooterLink to="/signin">Islamabad</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>OxyCon</SocialLogo>
                        <WebsiteRights to='/'>Sukkur IBA University © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/khilji_mateen/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href='https://twitter.com/mateen_khilji' target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/abdul-mateen-khilji-8a743217b/' target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
