import { Nav,
	NavItem,
  NavLink,
  NavMenu,
  Logo,
  NavDropdown,
  NavDropdownContents
} from './Navbar.styled';

function Navbar() {
  return (
    <>
      <Nav>
        <Logo>
            Raghav Parikh
        </Logo>
        <NavMenu>
          <NavLink to='/' >
            Home
          </NavLink>
			 <NavLink to='/gallery' activeClassName="active">
            Image
          </NavLink>
          <NavLink to='/contact' activeClassName="active">
            Contact
          </NavLink>
          </NavMenu>        
      </Nav>
      </>
  );
}

// const Navbar = () => {
//   return (
//     <Nav>
// 		{/* <NavItem>Raghav Parikh</NavItem> */}
//       <NavItem to="/" exact activeClassName="active">
//         Home
//       </NavItem>
//       <NavItem to="/about" activeClassName="active">
//         About
//       </NavItem>
// 		<NavItem to="/contact" activeClassName="active">
//         Contact Us
//       </NavItem>
//       {/* Add more nav items for your routes */}
//     </Nav>
//   );
// };

export default Navbar;