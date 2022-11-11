import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavResume,  NavBarContainter} from '../elements/NavBarElements';
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
                  <NavResume
                    to="Resume"
                    duration={500}
                    exact="true"
                    offset={-80}
                  >
                    About Us
                  </NavResume>
                </NavItem>
                <NavItem>
                  <NavResume
                    to="Resume"
                    duration={500}
                    exact="true"
                    offset={-80}
                  >
                    Vision
                  </NavResume>
                </NavItem>
                <NavItem>
                  <NavResume
                    to="Resume"
                    duration={500}
                    exact="true"
                    offset={-80}
                  >
                    Partner
                  </NavResume>
                </NavItem>
                <NavItem>
                  <NavResume
                    to="Resume"
                    duration={500}
                    exact="true"
                    offset={-80}
                  >
                    Support
                  </NavResume>
                </NavItem>
                <NavItem>
                  <NavResume
                    to="Resume"
                    duration={500}
                    exact="true"
                    offset={-80}
                  >
                    Blog
                  </NavResume>
                </NavItem>
                <NavBtn>
                  <NavBtnLink to="HireMe">Contact</NavBtnLink>
                </NavBtn>
              </NavMenu>
            </NavBarContainter>
          </Nav>
        </IconContext.Provider>
      </>
    );
}

export default NavBar
