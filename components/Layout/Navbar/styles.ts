import styled, { css } from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	padding: 1rem 2rem;
	align-items: baseline;
	justify-content: space-between;
	height: 100%;
`;
const Side = styled.section``;
export const Left = styled(Side)`
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
`;

export const Right = styled(Side)`
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
`;
