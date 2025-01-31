import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import guestUser from '../utils/guestUser';

function LogOutButton({ setUser }) {

    const logOut = (event) => {
        event?.preventDefault();
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        toast.success('Logged Out Successfully');
        setUser(guestUser);
    }

    return (
        <>
            <NavLink to='/' onClick={logOut}>Log Out</NavLink>
        </>
    );
};

export default LogOutButton;