export const fetchUsers = async () => {
	const request = await fetch('http://localhost:3001/users');
	const users = await request.json();
	return users;
};
