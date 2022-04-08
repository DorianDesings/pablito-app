const Pagination = ({ page, setPage, totalPages }) => {
	return (
		<>
			<button onClick={() => setPage(page - 1)} disabled={page <= 1}>
				Prev
			</button>
			<span>
				Página {page} de {totalPages}
			</span>
			<button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
				Next
			</button>
		</>
	);
};

export default Pagination;
