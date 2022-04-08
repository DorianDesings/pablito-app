import styled from 'styled-components';

const StyledRow = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	align-items: center;
	height: 80px;
	margin-bottom: 1rem;
	padding: 0 1rem;
	border: 2px solid rgb(255 255 255 / 0.5);
	box-shadow: 1px 1px 5px rgb(255 255 255 / 0.5);
	border-radius: 0.4rem;
`;

const StyledUserData = styled.div`
	display: flex;
	align-items: center;

	h2,
	p {
		font-size: 0.8rem;
		margin: 0 0 0 15px;
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	img {
		max-width: 30%;
		border-radius: 50%;
	}
`;

const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		max-width: 20px;
	}
`;

export { StyledRow, StyledUserData, StyledUserInfo };
