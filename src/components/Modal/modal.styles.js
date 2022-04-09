import styled from 'styled-components';
const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgb(0 0 0 / 0.9);
`;

const StyledButton = styled.button`
	position: absolute;
	right: 2rem;
	top: 1rem;
`;

const StyledBanner = styled.div`
	position: relative;
	width: 100vw;
	/* height: 55vh; */
	background-image: ${({ img }) => `url(${img})`};
	background-repeat: no-repeat;
	background-size: cover;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(0 0 0 / 0.5);
	}
`;

export { StyledModal, StyledButton, StyledBanner };
