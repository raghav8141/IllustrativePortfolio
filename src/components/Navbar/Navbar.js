import { Nav, NavBarContainer,
  NavLink,
  Logo,
  DrawerContent,
  Bars,
  DrawerContainer,
  DrawerItem,
  DrawerItemContainer
} from './Navbar.styled';
import React, { useState, useEffect, useRef } from 'react';

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

  const handleDrawerItemClick = () => {
  		setIsDrawerOpen(false);
	};

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDrawer);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDrawer);
    };
  }, []);

  return (
    <>
	 <NavBarContainer>
		<Nav isDrawerOpen={isDrawerOpen}> 
			<NavLink to="/">
				<Logo>
          		Raghav Parikh
				</Logo>
			</NavLink>
        <Bars onClick={toggleDrawer} />
      </Nav>
      <DrawerContainer open={isDrawerOpen} ref={drawerRef}>
        <DrawerContent>
         <DrawerItemContainer>
				<DrawerItem to="/" onClick={handleDrawerItemClick} className="home-drawer-item">Home</DrawerItem>
				<DrawerItem to="/gallery/image" onClick={handleDrawerItemClick}>Slider</DrawerItem>
				<DrawerItem to="/layout" onClick={handleDrawerItemClick}>Gallery</DrawerItem>
				<DrawerItem to="/contact" onClick={handleDrawerItemClick}>Contact</DrawerItem>
			</DrawerItemContainer>
        </DrawerContent>
      </DrawerContainer>
	 </NavBarContainer>
    </>
  );
}

export default Navbar;