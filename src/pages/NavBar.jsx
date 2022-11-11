import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink, NavPage,  NavBarContainter} from '../elements/NavBarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import navlogo from "../assets/images/navlogo.png";

const NavBar = ( {toggle} ) => {

    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
          setscrollNav(true)
        } else {
          setscrollNav(false)
        }
    }

    useEffect(() => {
     window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
      <>
        <IconContext.Provider value={{ color: "#ffff" }}>
          <Nav scrollNav={scrollNav}>
            <NavBarContainter>
              <NavLogo to="/" onClick={toggleHome}>
                <img src={navlogo} alt="clothing line" />
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavPage
                    to="ShopPage"
                    duration={500}
                    offset={-80}
                  >
                    Shop
                  </NavPage>
                </NavItem>
                <NavItem>
                  <NavPage
                    to="ShopPage"
                    duration={500}
                    offset={-80}
                  >
                    BestSellers
                  </NavPage>
                </NavItem>
                <NavItem>
                  <NavPage
                    to="PartnerPage"
                    duration={500}
                    offset={-80}
                  >
                    Partner
                  </NavPage>
                </NavItem>
                <NavItem>
                  <NavPage
                    to="BlogPage"
                    duration={500}
                    offset={-80}
                  >
                    Blog
                  </NavPage>
                </NavItem>
                <NavItem>
                  <NavPage
                    to="AboutUs"
                    duration={500}
                    offset={-80}
                  >
                    About Us
                  </NavPage>
                </NavItem>
                <NavBtn>
                  <NavBtnLink
                    to="Footer"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Contact
                  </NavBtnLink>
                </NavBtn>
              </NavMenu>
            </NavBarContainter>
          </Nav>
        </IconContext.Provider>
      </>
    );
}

export default NavBar
