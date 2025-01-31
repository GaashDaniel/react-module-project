import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAllBusinesses } from "../services/cardsCrud";
import Pagination from "./Pagination";
import BusinessCard from "./BusinessCard";
import CreateNewBusinessCardModal from "../modals/CreateNewBusinessCardModal";
import '../styles/SearchResults.css';

function SearchResults({ searchQuery, user, onlyFavorites, onlyMyCards }) {
    const [searchParams] = useSearchParams();
    const [businesses, setBusinesses] = useState([]);
    let filteredBusinesses = businesses;
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

    useEffect(() => {
        void async function fetchAllBusinesses() {
            const businesses = await getAllBusinesses();
            setBusinesses(businesses);
            setIsLoading(false);
        }();
    }, []);

    if (isLoading) return <div className='search-results'><h1>Loading...</h1></div>;
    if (searchQuery) {
        filteredBusinesses = filteredBusinesses.filter(business => business.title.toLowerCase().includes(searchQuery.toLowerCase()));
    };
    if (onlyFavorites) {
        filteredBusinesses = filteredBusinesses.filter(business => business.likes.includes(user._id));
    };
    if (onlyMyCards) {
        filteredBusinesses = filteredBusinesses.filter(business => business.user_id === user._id);
    };

    const cardsInPage = user.loggedIn ? 11 : 12;
    const pageCount = Math.ceil(filteredBusinesses.length / cardsInPage);
    const currentPage = +searchParams.get('page') || 1;
    const offset = (currentPage - 1) * cardsInPage;
    filteredBusinesses = filteredBusinesses.slice(offset, offset + cardsInPage);

    return (
        <div className="search-results">
            {filteredBusinesses.length === 0 && <h2 className='no-businesses-found'> No businesses found</h2>}
            <div className="cards">
                {(user.isBusiness || user.isAdmin) && <Link className='business-card create-business-card-button' to='#create-new-business-card'>
                    <FontAwesomeIcon icon={faPlus} />
                    Create New Business Card
                </Link>}
                {filteredBusinesses.map(business =>
                    <BusinessCard
                        key={business._id}
                        user={user}
                        business={business}
                        setBusiness={newBusiness => {
                            const newBusinesses = businesses.map(business => {
                                if (business._id !== newBusiness._id) return business;
                                return newBusiness;
                            });
                            setBusinesses(newBusinesses);
                        }}
                        removeBusiness={() => {
                            const removedBusiness = business;
                            const newBusinesses = businesses.filter(business => {
                                return business._id !== removedBusiness._id;
                            });
                            setBusinesses(newBusinesses);
                        }}
                    />
                )}
            </div>
            <Pagination {...{ pageCount, currentPage, isMobile, searchQuery }} />
            <CreateNewBusinessCardModal
                isOpen={location.hash === '#create-new-business-card'}
                user={user}
                addBusiness={
                    newBusiness => setBusinesses([newBusiness, ...businesses])
                }
            />
        </div>
    );
};

export default SearchResults;