import { useState } from 'react';

export const useFilters = initialUsers => {
	const [search, setSearch] = useState('');

	const [onlyActive, setOnlyActive] = useState(false);

	const [sortBy, setSortBy] = useState('default');

	let filteredUsers = filterActiveUsers(initialUsers, onlyActive);
	filteredUsers = filterUsersByName(filteredUsers, search);
	filteredUsers = sortByUsers(filteredUsers, sortBy);

	return {
		filteredUsers,
		search,
		setSearch,
		onlyActive,
		setOnlyActive,
		sortBy,
		setSortBy
	};
};

const filterUsersByName = (users, search) => {
	const searchToLowerCase = search.toLowerCase();
	const newUsers = users.filter(user =>
		user.name.toLowerCase().startsWith(searchToLowerCase)
	);

	return newUsers;
};

const filterActiveUsers = (users, onlyActive) => {
	if (!onlyActive) return [...users];

	return users.filter(user => user.active);
};

const sortByUsers = (users, sortBy) => {
	const sortedUsers = [...users];

	if (sortBy === 'default') return sortedUsers;
	return sortedUsers.sort((a, b) => {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		return 0;
	});
};
