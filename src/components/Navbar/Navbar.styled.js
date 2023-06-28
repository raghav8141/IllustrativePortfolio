import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #FFFFFF;
  height: 70px;
  display: flex;    
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color:  #000000;
  font-size: 40px;
  position: left;
  top: 0;
  left: 0;
  padding: 10px;
`;

export const NavLink = styled(Link)`
  color:  #000000;
  display: flex;
  align-items: center;
  text-decoration: underline;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  &.active {
   //  background: #000033;
    color: #000000;
  }
`;

export const Name = styled.div`
  color: #f2f2f2;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: right;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavDropdown = styled.div`
  color: #000001;
  position: relative;
  display: inline-block;
`;

export const NavDropdownContents = styled.div`
display: none;
position: absolute;
`;

export const NavItem = styled(NavLink)`
  color: #333;
  margin-right: 10px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;