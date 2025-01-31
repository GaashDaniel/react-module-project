import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartOutlined, faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { patchToggleFavorite } from '../services/cardsCrud';
import EditBusinessCardModal from '../modals/EditBusinessCardModal';
import DeleteBusinessCardConfirmationModal from '../modals/DeleteBusinessCardConfirmationModal';
import '../styles/BusinessCard.css';

function BusinessCard({ business, setBusiness, removeBusiness, user }) {

    const navigate = useNavigate();
    const isFavorite = business.likes.includes(user._id);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    async function toggleFavorite() {
        if (!user.loggedIn) return navigate('#login');
        const updatedBusiness = await patchToggleFavorite(business._id);
        setBusiness(updatedBusiness);
    };

    const address = `${business.address.city}, ${business.address.country}`;

    return (
        <div className="business-card">
            <NavLink to={`/business/${business._id}`} className='image'>
                <img src={business.image.url} alt={business.image.alt} onError={(event) => {
                    event.target.onerror = null;
                    event.target.src = 'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg';
                }} />
            </NavLink>
            <div className='details'>
                <button className='btn likes' title='Like/Unlike' onClick={toggleFavorite}>
                    <span>{business.likes.length}</span>
                    <FontAwesomeIcon icon={isFavorite ? heartFilled : heartOutlined} />
                </button>
                <h2 title={business.title}>{business.title}</h2>
                <h3 title={business.subtitle}>{business.subtitle}</h3>
                <hr />
                <p>Phone: <a href={`tel:${business.phone}`}>{business.phone}</a></p>
                <address title={address} dir='auto'>Address: {address}.</address>
                <hr />
                <div className='actions'>
                    <span className='card-id'>Card Id: {business.bizNumber}</span>
                    {user._id === business.user_id &&
                        <button className='btn btn-primary edit' title='Edit' onClick={() => setEditModalOpen(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>}
                    {user._id === business.user_id &&
                        <button className='btn btn-danger delete' title='Delete' onClick={() => setConfirmModalOpen(true)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>}
                </div>
                <EditBusinessCardModal isOpen={editModalOpen} onHide={() => setEditModalOpen(false)} {...{ business, setBusiness }} />
                <DeleteBusinessCardConfirmationModal isOpen={confirmModalOpen} onHide={() => setConfirmModalOpen(false)} {...{ business, removeBusiness }} />
            </div>
        </div>
    );
};

export default BusinessCard;