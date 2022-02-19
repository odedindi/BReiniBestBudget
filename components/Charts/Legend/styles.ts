import styled, { css } from 'styled-components';

export const Legend = styled.ul<{ reverse?: boolean }>`
	font-size: 1.2rem;
	font-weight: bold;
	display: flex;
	${({ reverse }) =>
		reverse
			? css`
					flex-direction: column-reverse;
					justify-content: flex-end;
			  `
			: css`
					flex-direction: column;
			  `}
`;

export const Amount = styled.span`
	font-size: 1rem;
	color: #757575;
	padding-left: 0.5em;
`;
