import { Nav,
	NavItem,
  NavLink,
  NavMenu,
  Logo,
  NavDropdown,
  NavDropdownContents,
  Drawer,
  DrawerContent,
  Bars,
  DrawerContainer,
  DrawerNavLink,
  DrawerItem,
  DrawerItemContainer
} from './Navbar.styled';
// import { NavLink as Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutsideDrawer = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDrawer);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDrawer);
    };
  }, []);

  return (
    <>
      <Nav>
			<NavLink to="/">
				<Logo>
          		Raghav Parikh
				</Logo>
			</NavLink>
        {/* <NavMenu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/gallery' activeClassName="active">Image</NavLink>
          <NavLink to='/contact' activeClassName="active">Contact</NavLink>
        </NavMenu> */}
        <Bars onClick={toggleDrawer} />
      </Nav>
      <DrawerContainer open={isDrawerOpen} ref={drawerRef}>
        <DrawerContent>
         <DrawerItemContainer>
				<DrawerItem to="/">Home</DrawerItem>
				<DrawerItem to="/gallery/image">Slider</DrawerItem>
				<DrawerItem to="/layout">Gallery</DrawerItem>
				<DrawerItem to="/contact">Contact</DrawerItem>
			</DrawerItemContainer>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
}

export default Navbar;