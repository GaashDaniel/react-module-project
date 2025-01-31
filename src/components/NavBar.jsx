import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchForm from "./SearchForm";
import logOut from "../utils/logOut";
import UserAuthLevelIcon from "./UserAuthLevelIcon";
import '../styles/NavBar.css';

function NavBar({ user, setUser, searchQuery, setSearchQuery, searchParams, setSearchParams }) {

    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpanded(false);
    }, [location.pathname, searchParams.get('query'), location.hash]);

    const navBarRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navBarRef.current && !navBarRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [navBarRef]);

    const navigate = useNavigate();
    const userFirstName = user.name.first.replace(/./, match => match.toUpperCase());

    return (
        <Navbar
            ref={navBarRef}
            collapseOnSelect
            expanded={expanded}
            expand="lg"
            className="bg-body-tertiary nav-bar-wrapper"
            fixed="top"
        >
            <Container className="nav-bar" >
                <NavLink className='navbar-brand' to='/' title="Go Home">EasyBusi</NavLink>
                <UserAuthLevelIcon user={user} />
                <ThemeSwitcher />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                        {!user.loggedIn && <NavLink className='nav-link' to='#login'>Login</NavLink>}
                        {!user.loggedIn && <NavLink className='nav-link' to='#register'>Register</NavLink>}
                        {user.loggedIn && <NavDropdown title={userFirstName} id="collapsible-nav-dropdown">
                            <NavLink className='dropdown-item' to={'/profile'}>Profile</NavLink>
                            {(user.isBusiness || user.isAdmin) && <NavLink className='dropdown-item' to='/my-cards'>My Cards</NavLink>}
                            <NavLink className='dropdown-item' to='/favorites'>Favorites</NavLink>
                            <NavLink className='dropdown-item' to='/' onClick={(event) => logOut(event, setUser, navigate)}>Log Out</NavLink>
                        </NavDropdown>}
                    </Nav>
                    <SearchForm {...{ searchQuery, setSearchQuery, searchParams, setSearchParams }} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;