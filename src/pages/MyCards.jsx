import SearchResults from "../components/SearchResults";
import '../styles/MyCards.css';

function MyCards({ searchQuery, user }) {
    return (
        <div data-page="my-cards">
            <h1>Your Business Cards</h1>
            <SearchResults searchQuery={searchQuery} user={user} onlyMyCards />
        </div >
    );
};

export default MyCards;