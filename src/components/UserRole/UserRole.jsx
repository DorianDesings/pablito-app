import { StyledUserRole } from './userRole.styles';

const UserRole = ({ role }) => (
	<StyledUserRole role={role}>{role}</StyledUserRole>
);

export default UserRole;
