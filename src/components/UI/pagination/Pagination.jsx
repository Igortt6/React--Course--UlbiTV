import { usePagination } from '../../../hooks/usePagination'
import cl from './Pagination.module.scss'

const Pagination = ({ totalPage, page, changePage }) => {
	let pagesArray = usePagination(totalPage)

	return (
		<div className={cl.wrapper}>
			{pagesArray.map(p => (
				<span
					onClick={() => changePage(p)}
					className={page === p ? `${cl.page} ${cl.page_active}` : cl.page}
					key={p}
				>
					{p}
				</span>
			))}
		</div>
	)
}
export default Pagination
