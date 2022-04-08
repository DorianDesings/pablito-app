import { useFilters } from '../../hooks/useFilters';
import { useUsers } from '../../hooks/useUsers';
import UserRow from '../UserRow/UserRow';
import UsersFilters from '../UsersFilters/UsersFilters';

const UsersList = () => {
	const { users } = useUsers();

	const {
		filteredUsers,
		search,
		setSearch,
		onlyActive,
		setOnlyActive,
		sortBy,
		setSortBy
	} = useFilters(users);

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
			{filteredUsers &&
				filteredUsers.map(user => <UserRow key={user.id} {...user} />)}
		</>
	);
};

export default UsersList;
