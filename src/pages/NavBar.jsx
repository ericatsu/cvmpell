import React, {useState, useEffect} from 'react';
import {FaBars, FaSearch} from 'react-icons/fa'
import { Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink, NavPage,  NavBarContainter, SearchContainer, Input} from '../elements/NavBarElements';
import { IconContext} from 'react-icons/lib';
import { IoCartSharp  } from "react-icons/io5";
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
                <img src={navlogo} alt="clothing line" style={{size: '2rem'}}/>
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu >
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
                  <SearchContainer>
            <Input type="text" placeholder='Search' style={{ border: 'none' }}/>
            <FaSearch style={{ color: "white" }} />
          </SearchContainer>
                </NavItem>
                <NavItem>
                  <NavPage> <IoCartSharp/></NavPage>
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
                    Log In
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
