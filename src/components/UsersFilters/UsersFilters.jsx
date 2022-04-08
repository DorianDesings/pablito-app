const UsersFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	return (
		<form>
			<input
				type='text'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<label>Sólo Activos</label>
			<input
				type='checkbox'
				value={onlyActive}
				onChange={e => setOnlyActive(e.target.checked)}
			/>

			<select value={sortBy} onChange={e => setSortBy(e.target.value)}>
				<option value='default'>Por Defecto</option>
				<option value='name'>Nombre</option>
			</select>
		</form>
	);
};

export default UsersFilters;
