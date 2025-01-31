import SearchResults from "../components/SearchResults";

function Favorites({ searchQuery, user }) {
    return (
        <div data-page="favorites">
            <h1>Your Favorite Business Cards</h1>
            <SearchResults searchQuery={searchQuery} user={user} onlyFavorites />
        </div>
    );
};

export default Favorites;