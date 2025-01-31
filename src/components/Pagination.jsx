import { Link } from "react-router-dom";
import '../styles/Pagination.css';

function Pagination({ pageCount, currentPage, isMobile, searchQuery }) {
    const extraLinks = isMobile ? 1 : 2;
    const maxLinks = Math.min(pageCount, extraLinks * 2 + 1);
    const firstPage = Math.min(
        Math.max(1, currentPage - extraLinks),
        pageCount - maxLinks + 1
    );
    const queryPart = searchQuery ? `&query=${searchQuery}` : "";

    return (
        <div className="my-pagination">
            {currentPage <= 1
                ? <a>&laquo;</a>
                : <Link to={{ search: `?page=${1}${queryPart}` }}>&laquo;</Link>
            }
            {!isMobile && (currentPage <= 1
                ? <a>&lsaquo;</a>
                : <Link to={{ search: `?page=${currentPage - 1}${queryPart}` }}>&lsaquo;</Link>
            )}
            {Array(Math.min(pageCount, maxLinks)).fill(0).map((_, i) => {
                const page = firstPage + i;
                let className = "";
                if (page === currentPage) {
                    className = "current-page";
                }
                return <Link className={className} to={{ search: `?page=${page}${queryPart}` }} key={page}>
                    {page}
                </Link>
            })}
            {!isMobile && (currentPage >= pageCount
                ? <a>&rsaquo;</a>
                : <Link to={{ search: `?page=${currentPage + 1}${queryPart}` }}>&rsaquo;</Link>
            )}
            {currentPage >= pageCount
                ? <a>&raquo;</a>
                : <Link to={{ search: `?page=${pageCount}${queryPart}` }}>&raquo;</Link>
            }
        </div>
    );
};

export default Pagination;