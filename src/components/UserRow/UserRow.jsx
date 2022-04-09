import { useState } from 'react';
import UserFormModal from '../Modal/UserFormModal';
import UserRole from '../UserRole/UserRole';
import UserStatus from '../UserStatus/UserStatus';
import { StyledRow, StyledUserData, StyledUserInfo } from './userRow.styles';

const deleteUser = id => {
	const request = fetch(`http://localhost:3001/users/${id}`, {
		method: 'DELETE'
	});
};
const UserRow = ({ id, name, username, image, role, active }) => {
	const [showUserModal, setShowUserModal] = useState(false);
	return (
		<StyledRow>
			<StyledUserData>
				<img src={image} alt='' />
				<div>
					<h2>{name}</h2>
					<p>{username}</p>
				</div>
			</StyledUserData>
			<StyledUserInfo>
				<UserStatus active={active} />
				<UserRole role={role} />
				<img
					src='/assets/icons/pen.svg'
					alt=''
					onClick={() => {
						setShowUserModal(true);
					}}
				/>
				<img
					onClick={() => deleteUser(id)}
					src='/assets/icons/trash.svg'
					alt=''
				/>
			</StyledUserInfo>
			{showUserModal && (
				<UserFormModal
					setShowUserModal={setShowUserModal}
					userId={id}
					name={name}
					username={username}
					role={role}
					active={active}
				/>
			)}
		</StyledRow>
	);
};

export default UserRow;
