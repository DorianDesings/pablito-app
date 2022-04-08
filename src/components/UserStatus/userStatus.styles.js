import styled from 'styled-components';

const StyledUserStatus = styled.span`
	color: ${({ active }) => (active ? 'lime' : 'crimson')};
`;

export { StyledUserStatus };
