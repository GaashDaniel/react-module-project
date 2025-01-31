import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import GoogleMapsFrame from './GoogleMapsFrame';
import EditUserModal from '../modals/editUserModal';
import DeleteUserConfirmationModal from '../modals/deleteUserConfirmationModal';
import '../styles/BaseFlyer.css';

function toTitleCase(sentence) {
    let words = sentence.split(' ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    sentence = words.join(' ');
    return sentence;
};

function UserFlyer({ user, setUser }) {


    const address = `${user.address?.street} ${user.address?.houseNumber}, ${user.address?.city}, ${user.address?.country}`;


    const [editModalOpen, setEditModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const fullName = toTitleCase(`${user.name?.first} ${user.name?.middle} ${user.name?.last}`)

    return (
        <div className='user-flyer base-flyer' style={{ '--background-image': `url(${user.image?.url})` }}>
            <h1>{fullName}'s Profile</h1>
            <div className='details-container'>
                <div className='contact'>
                    <p>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                    <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                    <address title={address} dir='auto'>Address: {address}.</address>
                    {user.isBusiness && <p> {fullName} is a business user!</p>}
                </div>
                <GoogleMapsFrame address={address} />
            </div>
            <div className='actions'>
                <button className='btn btn-primary edit' title='Edit' onClick={() => setEditModalOpen(true)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>

                <button className='btn btn-danger delete' title='Delete' onClick={() => setConfirmModalOpen(true)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
            <EditUserModal isOpen={editModalOpen} onHide={() => setEditModalOpen(false)} {...{ user, setUser }} />
            <DeleteUserConfirmationModal isOpen={confirmModalOpen} onHide={() => setConfirmModalOpen(false)} {...{ user, setUser }} />
        </div>
    );
};

export default UserFlyer;