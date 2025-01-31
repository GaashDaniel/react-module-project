import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartOutlined, faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { patchToggleFavorite } from '../services/cardsCrud';
import GoogleMapsFrame from './GoogleMapsFrame';
import EditBusinessCardModal from '../modals/EditBusinessCardModal';
import DeleteBusinessCardConfirmationModal from '../modals/DeleteBusinessCardConfirmationModal';
import '../styles/BaseFlyer.css';

function BusinessFlyer({ user, business, setBusiness }) {

    const navigate = useNavigate();
    const isFavorite = business.likes?.includes(user._id);
    async function toggleFavorite() {
        if (!user.loggedIn) return navigate('#login');
        const updatedBusiness = await patchToggleFavorite(business._id);
        setBusiness(updatedBusiness);
    };

    const removeBusiness = () => {
        navigate('/my-cards');
    };

    const address = business.address && `${business.address?.street} ${business.address?.houseNumber}, ${business.address?.city}, ${business.address?.country}.`;

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    return (
        <div className='business-flyer base-flyer' style={{ '--background-image': `url(${business.image?.url})` }}>
            <button className='btn likes' title='Like/Unlike' onClick={toggleFavorite}>
                <span>{business.likes?.length}</span>
                <FontAwesomeIcon icon={isFavorite ? heartFilled : heartOutlined} />
            </button>
            <h1>{business.title}</h1>
            <h2>{business.subtitle}</h2>
            <p className='description'>{business.description}</p>
            <div className='details-container'>
                <div className='contact'>
                    <p>Website: <a href={business.web}>{business.web}</a></p>
                    <p>Phone: <a href={`tel:${business.phone}`}>{business.phone}</a></p>
                    <p>Email: <a href={`mailto:${business.email}`}>{business.email}</a></p>
                    <address dir='auto'>Address: {address}.</address>
                </div>
                <GoogleMapsFrame address={address} />
            </div>
            <div className='actions'>
                {user._id === business.user_id && <button className='btn btn-primary edit' title='Edit' onClick={() => setEditModalOpen(true)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>}
                {user._id === business.user_id && <button className='btn btn-danger delete' title='Delete' onClick={() => setConfirmModalOpen(true)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>}
            </div>
            <EditBusinessCardModal isOpen={editModalOpen} onHide={() => setEditModalOpen(false)} {...{ business, setBusiness }} />
            <DeleteBusinessCardConfirmationModal isOpen={confirmModalOpen} onHide={() => setConfirmModalOpen(false)} {...{ business, removeBusiness }} />
        </div>
    );
};

export default BusinessFlyer;