import { useState } from 'react';

export const useFilters = initialUsers => {
	const [search, setSearch] = useState('');

	const [onlyActive, setOnlyActive] = useState(false);

	const [sortBy, setSortBy] = useState('default');

	const [resultsPerPage, setResultsPerPage] = useState(5);

	const [page, setPage] = useState(1);

	let filteredUsers = filterByPage(initialUsers, resultsPerPage, page);
	filteredUsers = filterActiveUsers(filteredUsers, onlyActive);
	filteredUsers = filterUsersByName(filteredUsers, search);
	filteredUsers = sortByUsers(filteredUsers, sortBy);

	return {
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

const filterByPage = (users, resultsPerPage, page) => {
	const sliceUsers = users.slice(
		page * resultsPerPage - resultsPerPage,
		resultsPerPage * page
	);
	return sliceUsers;
};
