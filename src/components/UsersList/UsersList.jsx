import { useState } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { useUsers } from '../../hooks/useUsers';
import UserFormModal from '../Modal/UserFormModal';
import Pagination from '../Pagination/Pagination';
import ResultsPerPage from '../ResultsPerPage/ResultsPerPage';
import UserRow from '../UserRow/UserRow';
import UsersFilters from '../UsersFilters/UsersFilters';

const UsersList = () => {
	const [showUserModal, setShowUserModal] = useState(false);
	const { users } = useUsers();
	const {
		filteredUsers,
		search,
		setSearch,
		onlyActive,
		setOnlyActive,
		sortBy,
		setSortBy,
		page,
		setPage,
		resultsPerPage,
		setResultsPerPage
	} = useFilters(users);

	const totalPages = Math.ceil(users.length / resultsPerPage);

	return (
		<>
			<UsersFilters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>

			<ResultsPerPage
				resultsPerPage={resultsPerPage}
				setResultsPerPage={setResultsPerPage}
				setPage={setPage}
			/>

			<Pagination page={page} setPage={setPage} totalPages={totalPages} />

			<button onClick={() => setShowUserModal(true)}>Añadir usuario</button>

			{showUserModal && <UserFormModal setShowUserModal={setShowUserModal} />}

			{filteredUsers &&
				filteredUsers.map(user => <UserRow key={user.id} {...user} />)}
		</>
	);
};

export default UsersList;
