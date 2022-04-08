import { StyledUserStatus } from './userStatus.styles';

const UserStatus = ({ active }) => {
	const userStatus = active ? 'Activo' : 'Inactivo';
	return <StyledUserStatus active={active}>{userStatus}</StyledUserStatus>;
};

export default UserStatus;
