import styled, { css } from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	padding: 1rem 2rem;
	align-items: baseline;
	justify-content: space-between;
	height: 100%;
`;
const Side = styled.div<{ loading: boolean }>``;
export const Left = styled(Side)`
	${({ loading }) =>
		loading
			? css`
					a {
						text-decoration: none;
						display: inline-block;
					}

					.left a[data-active='true'] {
						font-weight: bold;
					}

					a + a {
						margin-left: 1rem;
					}
			  `
			: css`
					a {
						text-decoration: none;
						display: inline-block;
					}

					.left a[data-active='true'] {
						font-weight: bold;
					}

					a + a {
						margin-left: 1rem;
					}
			  `}
`;

export const Right = styled(Side)`
	${({ loading }) =>
		loading
			? css`
					.right {
						margin-left: auto;
					}
			  `
			: css`
					a {
						text-decoration: none;
						display: inline-block;
					}

					a + a {
						margin-left: 1rem;
					}

					.right {
						margin-left: auto;
					}

					.right a {
						border: 1px solid black;
						padding: 0.5rem 1rem;
						border-radius: 3px;
					}

					p {
						display: inline-block;
						font-size: 13px;
						padding-right: 1rem;
					}

					button {
						border: none;
					}
			  `}
`;
