import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function SearchForm({ searchQuery, setSearchQuery, searchParams, setSearchParams }) {

    const location = useLocation();
    const navigate = useNavigate();
    const searchResultsPresent = Boolean(document.querySelector('.search-results'));

    const onInput = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (!searchResultsPresent) return;
        const page = searchParams.get('page');
        if (!page) return;
        const url = new URL(window.location.href);
        url.searchParams.delete('page');
        navigate(url);
    };

    const onBlur = (event) => {
        if (!searchResultsPresent) return;
        let query = event.target.value;
        query = query ? { query: query } : {};
        setSearchParams(query);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const path = searchResultsPresent ? location.pathname : '/';
        const query = searchQuery ? `?query=${searchQuery}` : '';
        const url = `${path}${query}`;
        navigate(url);
    };

    return (
        <Form className="d-flex" onSubmit={onSubmit}>
            <Form.Control
                name="query"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onInput={onInput}
                onBlur={onBlur}
                value={searchQuery}
            />
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    );
};

export default SearchForm;