import styled from 'styled-components';

const StyledUserRole = styled.span`
	padding: 0.5rem 0.8rem;
	border-radius: 0.5rem;
	color: #111;
	background-color: ${({ role }) => {
		if (role === 'Profesor') {
			return 'lightblue';
		}
		if (role === 'Alumno') {
			return 'lightcoral';
		}
		return 'grey';
	}};
`;

export { StyledUserRole };
