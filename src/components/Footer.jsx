import { NavLink, useNavigate } from "react-router-dom";
import logOut from '../utils/logOut';

function Footer({ user, setUser }) {
    const navigate = useNavigate();

    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-12 mt-md-0 mt-3">
                        <h5 className="display-4">EasyBusi</h5>
                        <p>Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</p>
                    </div>
                    <hr className="clearfix w-100" />
                    <div className="col-md-2 col-sm-2 mb-md-0 mb-3">
                        <h6>Site Map</h6>
                        <ul className="list-unstyled">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-2 mb-md-0 mb-3">
                        <h6>Profile</h6>
                        <ul className="list-unstyled">
                            {user.loggedIn && <li><NavLink to='/profile'>{user.name.first.replace(/./, match => match.toUpperCase())}</NavLink></li>}
                            {(user.isBusiness || user.isAdmin) && <li><NavLink to='/my-cards'>My Cards</NavLink></li>}
                            {user.loggedIn && <li><NavLink to='/favorites'>Favorites</NavLink></li>}
                            {!user.loggedIn && <li><NavLink to='#login'>Login</NavLink></li>}
                            {!user.loggedIn && <li><NavLink to='#register'>Register</NavLink></li>}
                            {user.loggedIn && <li><NavLink to='/' onClick={(event) => logOut(event, setUser, navigate)}>Log Out</NavLink></li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2025 Copyright: <a href="https://gaashdaniel.github.io/Gaash-Web-Solutions/">Gaash Web Solutions</a>
            </div>
        </footer>
    );
};

export default Footer;