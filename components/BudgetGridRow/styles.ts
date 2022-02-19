import styled from 'styled-components';

export const TableRow = styled.tr`
	.neg {
		color: #e31515;
	}
	.pos {
		color: #148727;
	}
`;

export const Label = styled.div`
	display: none;

	@media only screen and (max-width: 768px) {
		display: flex;
		align-items: center;
		flex: 1;
	}
`;
export const Content = styled.div`
	flex: 1;
`;
