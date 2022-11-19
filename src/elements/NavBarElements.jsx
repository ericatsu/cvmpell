import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    background: ${({ scrollNav }) => (scrollNav ? '#788097' : 'transparent')};
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavBarContainter = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 95%;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
   display: flex;
   //align-items: center;
   list-style: none;
   text-align: center;
   gap: 1rem;
   

   @media screen and (max-width: 769px) {
       display: none;
   }
`
export const NavItem = styled.li`
   height: 80px;
`

export const NavPage = styled(LinkR)` 
  color: ${({ scrollNav }) => (scrollNav ? '#000000' : '#ffffff')};
   display: flex;
   align-items: center;
   text-align: none;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-size: 1.3rem;

   &:hover{
     border-bottom: 3px solid #F5C32C;
   }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
      display: none;
  }
`

export const NavBtnLink = styled(LinkS)`
  border-radius: 5px;
  background: #f5c32c;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f5c32c;
  }
`;

export const SearchContainer = styled.form`
  border: 0.7px solid white;
  display: flex;
  align-items: center;
  text-align: none;
  margin-top: 22px;
  //margin-left: 25px;
  padding: 20px;
  height: 50%;
    color: ${({ scrollNav }) => (scrollNav ? '#000000' : '#ffffff')};

`;

export const Input = styled.input`
  border: none;
  //background-color: transparent;
`;