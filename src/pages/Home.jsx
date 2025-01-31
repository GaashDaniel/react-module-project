import SearchResults from "../components/SearchResults";

function Home({ searchQuery, user }) {
    return (
        <div data-page="home">
            <h1>Welcome To <strong>Business Card Portal</strong></h1>
            <p>Discover and share business connections with our extensive collection of business cards from various industries and services.</p>
            <SearchResults searchQuery={searchQuery} user={user} />
        </div>
    );
};

export default Home;