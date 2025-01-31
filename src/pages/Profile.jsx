import UserFlyer from "../components/UserFlyer";

function Profile({ user, setUser }) {
    return (
        <div data-page="profile">
            <UserFlyer {...{ user, setUser }} />
        </div>
    );
};

export default Profile;