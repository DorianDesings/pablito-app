import { useEffect, useState } from 'react';
import { fetchUsers } from '../lib/api/fetchUsers';

export const useUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers(setUsers);
	}, []);

	return { users };
};

const getUsers = async setUsers => {
	const users = await fetchUsers();
	setUsers(users);
};
