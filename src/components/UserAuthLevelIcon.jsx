import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCheck, faCrown, faUserTie, } from "@fortawesome/free-solid-svg-icons";

function UserAuthLevelIcon({ user }) {

    return (
        <>
            <Link className='btn' to={user.loggedIn ? '/profile' : '#login'} title={
                user.loggedIn ? user.isBusiness ? 'Business User Profile' : user.isAdmin ? 'Admin' : 'Regular User Profile' : 'Guest'
            }>
                {!user.loggedIn && <FontAwesomeIcon icon={faUser} />}
                {user.loggedIn && !user.isBusiness && !user.isAdmin && <FontAwesomeIcon icon={faUserCheck} />}
                {user.isBusiness && !user.isAdmin && <FontAwesomeIcon icon={faUserTie} />}
                {user.isAdmin && <FontAwesomeIcon icon={faCrown} />}
            </Link >
        </>
    );
};

export default UserAuthLevelIcon;