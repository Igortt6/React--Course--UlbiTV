import usePagination from "../../../hooks/usePagination";

// Компонент з номерами сторінок в кінці 
// ()
const Pagination = ({ totalPages, page, changePage }) => {
    const arrPages = usePagination(totalPages);


    return (
        <div className="page-btns__wraper">
            {arrPages.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page-btn page-btn__active' : 'page-btn'}
                >{p}
                </span>
            )}
        </div>
    )
}
export default Pagination;