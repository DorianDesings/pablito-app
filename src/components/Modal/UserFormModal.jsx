import { useState } from 'react';
import Modal from './Modal';
import { StyledButton, StyledModal } from './modal.styles';

const updateUser = async userData => {
	userData.image = `/assets/users/${userData.userId}.jpg`;
	const request = fetch(`http://localhost:3001/users/${userData.userId}`, {
		method: 'PUT',
		body: JSON.stringify(userData),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	console.log('REQUEST', request);
};

const addUser = async userData => {
	userData.userId = Date.now();
	const request = await fetch('http://localhost:3001/users', {
		method: 'POST',
		body: JSON.stringify(userData),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

const UserFormModal = ({
	setShowUserModal,
	userId,
	name,
	username,
	role,
	active
}) => {
	const [userData, setUserData] = useState({
		userId,
		name,
		username,
		role,
		active
	});

	return (
		<Modal>
			<StyledModal>
				<h1>ID: {userId}</h1>
				<StyledButton onClick={() => setShowUserModal(false)}>X</StyledButton>
				<form onSubmit={e => e.preventDefault()}>
					<div>
						<label>Nombre</label>
						<input
							type='text'
							value={userData.name || ''}
							onChange={e => setUserData({ ...userData, name: e.target.value })}
						/>
					</div>
					<div>
						<label>Username</label>
						<input
							type='text'
							value={userData.username || ''}
							onChange={e =>
								setUserData({ ...userData, username: e.target.value })
							}
						/>
					</div>
					<div>
						<label>Role</label>
						<select
							value={userData.role || 'default'}
							onChange={e => setUserData({ ...userData, role: e.target.value })}
						>
							<option value='default'>Role</option>
							<option value='profesor'>Profesor</option>
							<option value='alumno'>Alumno</option>
							<option value='otro'>Otro</option>
						</select>
					</div>
					<div>
						<label>¿Activo?</label>
						<input
							type='checkbox'
							checked={userData.active || false}
							onChange={e =>
								setUserData({ ...userData, active: e.target.checked })
							}
						/>
					</div>
					<button
						onClick={() => (userId ? updateUser(userData) : addUser(userData))}
					>
						{userId ? 'Editar Usuario' : 'Añadir Usuario'}
					</button>
				</form>
			</StyledModal>
		</Modal>
	);
};
export default UserFormModal;
