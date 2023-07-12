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
  font-family: 'Didact Gothic;
  align-items: center;
  color:  #000000;
  text-decoration: bold;
  font-size: 40px;
  position: absolute;
  top: 0%;
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
  display: flex;
  position: absolute;
  top: 4.4%;
  right: 0;
  transform: translate(-100%, -50%);
  color: #808080;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: right;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const Drawer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: opacity 0.3s ease-in-out;
//   z-index: 999;
//   opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
//   visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
// `;

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background: #f2f2f2;
  z-index: 999;
  opacity: .90;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin-top: 2rem;
//   padding-top: 2rem;
//   padding: 0; 
//   margin: 0; 
`;

export const DrawerItem = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-family: Didact Gothic;
  font-size: 18px
//   padding: 0.5rem;
//    &:not(:last-child) {
//     margin-bottom: 0.5rem;
//   }
`;
export const DrawerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const DrawerNavLink = styled(NavLink)`
  margin-bottom: 1rem;
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