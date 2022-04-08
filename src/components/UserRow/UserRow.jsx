import UserRole from '../UserRole/UserRole';
import UserStatus from '../UserStatus/UserStatus';
import { StyledRow, StyledUserData, StyledUserInfo } from './userRow.styles';

const UserRow = ({ id, name, username, image, role, active }) => {
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
				<img src='/assets/icons/pen.svg' alt='' />
				<img src='/assets/icons/trash.svg' alt='' />
			</StyledUserInfo>
		</StyledRow>
	);
};

export default UserRow;
